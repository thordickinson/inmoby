
const { ValidationError } = require('@hapi/joi/lib/errors');
const log4js = require('log4js')
const fs = require("fs")
const { sendException } = require("../util/telegram")

const log = log4js.getLogger('express-util')

/**
 * Envuelve un manejador de express para capturar los errores que
 * puedan ocurrir en un llamado asíncrono de express.
 * @example
 * const util = require('./zh-util/express/express-util')
 * router.get('/', wrapAsync( async (req, res) => {
 *      //implementacion....
 * }))
 * @param {Function} fn
 */
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(next);
    };
}

function getStackTrace() {
    var obj = {};
    Error.captureStackTrace(obj, getStackTrace);
    return obj.stack;
};

/**
 * Middleware que controla las excepciones capturadas al manejar las
 * solicitudes.
 * @example
 *
 * const util = require('./zh-util/express/express-util')
 * //...
 * router.get('/', wrapAsync( async (req, res) => {
 *      //implementacion....
 * }))
 * //...
 * app.use('/api', reouter)
 * app.use(util.handlerError) //<- Se debe poner al final
 * @param {*} error
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
async function handleError(error, req, res, next) {
    let code = error.httpCode || 500
    const { path } = req
    let message = error.message || `error: ${error}`
    const stack = error.stack || getStackTrace()
    if (error._original && error.details) { //joi validation error
        code = 400
        message = error.details[0].message
    }
    if (error instanceof ValidationError) {
        code = 400
        message = error.message
    }
    if (code === 500) {
        await logError(message, error)
    } else {
        log.warn(`Error capturado: ${message}`)
    }
    res.status(code).json({ message });
}

async function logError(message, exception) {
    //TODO: mover a configuracion telegram (botToken, chatId)
    log.error(message, exception)
    const botId = `5142795790:AAHYacckFzg23gNb0o6Vy57BT6QCmxRrizY`
    const chatId = -728635482
    //await sendException(botId, chatId, message, exception)
}

function addCacheHeader(res, timeInMinutes, isPrivate) {
    log.info(`Agregando header de caché por ${timeInMinutes} minutos`)
    let timeInSeconds = timeInMinutes * 60
    res.header("Cache-Control", `${isPrivate ? 'private' : 'public'}, max-age=${timeInSeconds}`)
}


function addCorsHeadersMiddleware(req, res, next) {
    res.header('access-control-allow-origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next()
}

function addEnvHeader(req, res, next) {
    if (!aws.isAWSRuntime()) {
        res.header('X-Local-Env', 'true')
    }
    next()
}

async function validateBody(joiSchema, req) {
    return validateObject(joiSchema, req.body)
}

async function validateQuery(joiSchema, req) {
    return validateObject(joiSchema, req.query)
}

async function validateParams(joiSchema, req) {
    return validateObject(joiSchema, req.params)
}

async function validateObject(joiSchema, object) {
    try {
        const result = await joiSchema.validateAsync(object)
        return result
    } catch (e) {
        console.warn(e)
        throw new ValidationError(e)
    }
}

function deleteAfterDownload(path) {
    return () => {
        fs.unlinkSync(path);
    }
}

module.exports = {
    validateBody,
    validateQuery,
    validateParams,
    wrapAsync,
    handleError,
    addCorsHeadersMiddleware,
    addCacheHeader,
    addEnvHeader,
    deleteAfterDownload
}