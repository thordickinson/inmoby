const express = require('express')
const bodyParser = require('body-parser')
const { isAWSRuntime } = require('./util/aws')
const log4js = require('log4js')
const { router } = require('./routing')
const logging = require('./util/logging');
const { handleError } = require('./util/express');


logging.configure();
const logger = log4js.getLogger("index")

const server = express()
server.use(bodyParser.json())
const isAws = isAWSRuntime()

if (isAws) {
    const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
    server.use(awsServerlessExpressMiddleware.eventContext())
}

// Enable CORS for all methods
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
});

server.use("/health", (req, res) => res.json({ status: "up" }))
server.use("/api/v1", router)
server.use(handleError)

module.exports = { server }

