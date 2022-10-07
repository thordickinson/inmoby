const { AuthorizationError, ConfigurationError, InternalServerError, NotAuthorizedError } = require('../common/exception')
const aws = require('../aws/aws-util')
const objects = require('../common/object-util')

const log = require("log4js").getLogger("security")
let cognito = null
let cachedUsers = {}
const ANONYMUS = "anonymus"
const SystemUsers = []
let jwks = null


function getCognito() {
    if (cognito == null) {
        const AWS = require('aws-sdk');
        cognito = new AWS.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
    }
    return cognito
}


/**
 * @typedef {object} SystemUser
 * @property {string} clientId El nombre del usuario
 * @property {string} clientPassword La contrseña del usuario
 * @property {Array<string>} roles Los roles con los que se autenticará el usuario
 */
/**
 * permite registrar un usuario de sistema para la autenticación
 * @param {SystemUser} systemUser  el usuario a registrar
 */
function registerSystemUser(systemUser) {
    SystemUsers.push(systemUser)
}


/**
 * Middleware para cargar el usuario en la solicitud
 * @param {any} req
 * @param {any} res
 * @param {function | undefined} next
 */
async function loadUserMiddleware(req, res, next) {
    let user = await getCognitoUser(req)
    req.user = { data: user, username: user.Username }
    let { Attributes = [] } = user
    const findAttr = (name) => (Attributes.find(a => a.Name === name) || {}).Value
    req.user.phone = findAttr("phone_number")
    req.user.fullname = findAttr("name")
    req.user.firstname = findAttr("given_name")
    req.user.middlename = findAttr("middle_name")
    req.user.lastname = findAttr("family_name")
    req.user.email = findAttr("email")

    if (!req.user.fullname) {
        const u = req.user
        u.fullname = [u.firstname, u.middlename, u.lastname].filter(n => n).join(" ")
    }

    log.info(`Identificando usuario desde cognito: ${req.user.username}`)
    if (next) next()
}

/**
 * Middleware que carga los roles del usuario actual en la solicitud.
 * @example
 * //Uso de los roles cargados
 * router.get('/', (req, res, next) => {
 *      let {roles} = req.user
 *      roles.find(r => 'rolename') //Verificar array de roles
 *      //...
 * })
 * /..
 * app.use(loadRolesMiddleware)
 * @param {*} req
 * @param {*} res
 * @param {function} next
 */
async function loadRolesMiddleware(req, res, next) {
    let user = req.user
    if (user == null) {
        await loadUserMiddleware(req, undefined, undefined)
        user = req.user
    }
    if (user.roles != null) {
        return //ya se han cargado los roles del usuario
    }
    user.roles = []
    user.hasRole = (name) => {
        return user.roles.filter(r => r == name).length > 0
    }

    if (user.jwtUser != null) {
        user.roles = user.jwtUser["cognito:groups"] || []
        next()
        return
    }

    let { username } = user
    log.info(`Cargando roles para usuario ${username}`)
    if (ANONYMUS != username) {
        let groups = await getUserGroups(username, req)
        user.roles = groups.map(g => g.GroupName)
        user.cognitoGroups = groups
        log.info(`Roles de usuario ${user.roles}`)
    }
    next()
}

/**
 * Crea un middleware que valida si el usuario actual tiene alguno de los roles
 * dados.
 * @example
 * //Solo permite la creación a usuarios con el rol administrador
 * router.post('/inmuebles', requireAnyRole('administrador'))
 * @param {string | string[]} role array de roles requeridos
 * @returns {function} un middleware para usar con express
 */
function requireAnyRole(role) {
    if (typeof role == 'string') {
        role = [role]
    }
    return async (req, res, next) => {
        let { user } = req
        let authorized = false
        console.log("user", user);
        if (user != null && user.roles != null) {
            /**@type {Array<string>} */
            let roles = user.roles
            console.log(role);
            authorized = roles.findIndex(r => role.indexOf(r) > -1) > -1
        } else {
            log.warn("No se ha podido identificar el usuario actual. Adicione el middleware loadRolesMiddleware.")
        }
        if (!authorized) {
            return res.status(400).json({ message: "El usuario no tiene permisos para acceder a esta funcionalidad" });
        }
        next();
    }
}



async function getJWKS() {
    if (jwks == null) {
        const region = aws.getAWSRegion()
        const userPoolId = aws.getUserPoolId()
        const jwksUrl = `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`
        log.info(`Obteniendo jwks desde url: ${jwksUrl}`)
        const axios = require('axios').default;
        const response = await axios.get(jwksUrl)
        jwks = response.data
    }
    return jwks
}


/**
 * Obtiene el usuario actual
 * @param {any} req
 */
async function getCognitoUser(req) {
    if (!aws.isAWSRuntime()) {
        let Username = req.header('X-Fake-User') || ANONYMUS
        log.warn(`Retornando usuario en modo desarrollo ${Username} - ENV: SECURITY_USER_NAME_DEV`)
        return { Username, Attributes: [{ Name: "email", Value: Username }] }
    }
    const provider = objects.getPropertySafe(req, 'apiGateway.event.requestContext.identity.cognitoAuthenticationProvider');
    console.log("provider", provider);
    console.log(req.apiGateway.event)
    if (provider == null) {
        return { Username: ANONYMUS }
    }
    let userPoolId = aws.getUserPoolId()
    const sub = provider.split(':')[2];
    if (cachedUsers[sub] != null) {
        return cachedUsers[sub]
    }
    const Params = {
        UserPoolId: userPoolId,
        Filter: "sub=\"" + sub + "\"",
        Limit: 1
    };
    return new Promise((resolve, reject) => {
        getCognito().listUsers(Params, function (err, data) {
            if (err) reject(err);
            else {
                let user = data.Users[0]
                cachedUsers[sub] = user
                log.info(`Usuario identificado ${user.Username}`)
                resolve(user);
            }
        });
    });
}

/**
 * Obtiene la lista de usuarios a los que el usuario actual pertenece
 * @returns {Promise<Object>}
 * @param {string} Username nombre del usuario a consultar
 */
async function getUserGroups(Username, req) {

    if (!aws.isAWSRuntime()) {
        /**@type string */
        let groups = req.header('X-Fake-User-Groups') || ''
        log.warn(`Retornando grupos en modo desarrollo ${groups} - ENV: SECURITY_USER_GROUPS_DEV`)
        return groups.split(',').map(s => ({ GroupName: s.trim() }))
    }

    let params = { UserPoolId: aws.getUserPoolId(), Username: Username }
    return new Promise((resolve, reject) => {
        getCognito().adminListGroupsForUser(params, function (err, data) {
            if (err) reject(err);
            else {
                let userGroups = data.Groups
                resolve(userGroups);
            }
        })
    })
}

function requireLogged(req) {
    if (!req.user || !req.user.username || req.user.username === 'anonymus') {
        throw new NotAuthorizedError(`El usuario no está autenticado`)
    }
}


function requireRole(req, role) {
    requireLogged(req)
    if (!req.user.hasRole(role)) {
        throw new NotAuthorizedError(`El usuario no tiene permisos para ejecutar la operación`)
    }
}


module.exports = {
    requireAnyRole,
    requireRole,
    requireLogged,
    loadUserMiddleware,
    loadRolesMiddleware,
    registerSystemUser
}