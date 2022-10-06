const dbConnect = require("./util/dbConnect")
const { randImage, hashedId } = require('./util/random')


async function insertDealers() {
}


async function seed() {
    process.env['MONGODB_URI'] = "mongodb://cotizador:cotizador@localhost:27017/cotizador"
    await dbConnect()
    await insertDealers()
}


seed().then(() => {
    process.exit(0)
}).catch(e => {
    console.log(e)
    process.exit(1)
})