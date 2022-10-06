const { isAWSRuntime } = require('./util/aws')
const isAws = isAWSRuntime()
require('dotenv').config()

const awsServerlessExpress = require('aws-serverless-express')
const { server } = require("./server")
const log4js = require('log4js')
const dbConnect = require('./util/dbConnect')
const logger = log4js.getLogger("index")



function loadContextVariables(event) {
  const { headers } = event
  //Esta variable se usa para generar urls
  process.env["ORIGIN_HEADER"] = headers.origin
}

dbConnect().then(() => console.log("Database connected"))

if (isAws) {
  logger.info("Running in AWS environment")
  const awsServer = awsServerlessExpress.createServer(server);
  exports.handler = (event, context) => {
    logger.debug(`EVENT: ${JSON.stringify(event)}`);
    loadContextVariables(event)
    return awsServerlessExpress.proxy(awsServer, event, context, 'PROMISE').promise;
  };
} else {
  const port = 3001;
  logger.info(`Running in local environment at http://localhost:${port}`)
  server.listen(3001)
}





