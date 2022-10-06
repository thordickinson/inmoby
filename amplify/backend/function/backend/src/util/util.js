var crypto = require('crypto');
const os = require("os");
const fs = require("fs");
var path = require('path');
const { cleanEnv, str } = require("envalid");
const { loadSecrets } = require('./aws');



function md5(data) {
    return crypto.createHash('md5').update(data).digest('hex')
}

function isLocalEnv() {
    return process.env["AWS_EXECUTION_ENV"] == undefined;
}

//Esta variable de entorno debe ser establecida a partir de la solicitud
function getRequestHost() {
    return process.env["ORIGIN_HEADER"] || "http://localhost:3000"
}

function newTempFilePath(prefix, suffix) {
    const tempDir = os.tmpdir();
    let filename = undefined;
    do {
        filename = path.join(tempDir, `${prefix}_${Date.now()}${suffix}`)
    } while (fs.existsSync(filename))
    return filename
}

async function validateEnv(spec) {
    await loadSecrets();
    return cleanEnv(process.env, spec)
}

async function* mapGenerator(asyncIterable, callback) {
    let i = 0;
    for await (const val of asyncIterable)
        yield callback(val, i++);
}

module.exports = { md5, newTempFilePath, isLocalEnv, getRequestHost, validateEnv }
