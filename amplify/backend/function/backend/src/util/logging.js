const log4js = require('log4js')


function configure() {
    log4js.configure({
        appenders: { 'out': { type: 'stdout' } },
        categories: {
            default: { appenders: ['out'], level: 'debug' },
            "FilterService": { appenders: ['out'], level: "info" }
        }
    });
}


module.exports = { configure }