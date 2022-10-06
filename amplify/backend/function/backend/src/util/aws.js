var secretsLoaded = false
/**
 * Verifica si la ejecución actual se está realizando dentro del entorno de AWS.
 * @returns {boolean} true, si se está ejecutando en el ambiente de aws lambda
 */
 function isAWSRuntime() {
    let value = process.env.LAMBDA_RUNTIME_DIR
    return typeof value !== 'undefined'
}

async function loadSecrets() {
    if (!isAWSRuntime() || secretsLoaded) return
    try {
        const amplifyEnvVars = Object.keys(process.env)
            .map(key => ({ key, value: process.env[key] }))
            .filter(v => v.value && v.value.indexOf("/amplify/") == 0)

        const reverseMap = amplifyEnvVars.reduce((p, c) => ({ ...p, [`${c.value}`]: c.key }), {})

        if (amplifyEnvVars.length > 0) {
            // @ts-ignore
            const aws = require('aws-sdk'); //Provista por aws en el entorno de lambda
            const Names = amplifyEnvVars.map(k => k.value)
            const { Parameters } = await (new aws.SSM()).getParameters({ Names, WithDecryption: true }).promise()
            const parameters = Parameters.map(p => ({ key: p.Name, value: p.Value }))
            parameters.forEach(p => process.env[reverseMap[p.key]] = p.value)
        }
    } finally {
        secretsLoaded = true
    }
}

module.exports = { isAWSRuntime, loadSecrets }