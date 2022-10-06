const { AgencyModel, PropertyModel } = require("./schemas/base")
const dbConnect = require("./util/dbConnect")
const { randImage, hashedId, randomText, randElement, randPhone, randEmail, randWord, randInt } = require('./util/random')

function generateKey(name) {
    return name.toLowerCase().replace(/ /g, "_")
}

const colors = ["#F44336", "#E91E63", "#9C27B0", "#673AB7",
    "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A",
    "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#9E9E9E"]
const domains = ["gmail.com", "outlook.com", "yahoo.com"]
const contactTypes = ["whatsapp", "email", "phone", "facebook", "twitter", "instagram"]

const AgencyNames = ["Inmofacil", "Inmobiliaria Villegas", "Tu Casa",
    "Habi", "Cáceres Inmobiliaria", "Inmovivir Ltda"]

function randContact() {
    const type = randElement(contactTypes)
    switch (type) {
        case "whatsapp": return { type, value: randPhone() }
        case "phone": return { type, value: randPhone() }
        case "email": return { type, value: randEmail() }
        default: return { type, value: randWord(7, 15) }
    }
}

function randTheme() {
    const mainColor = randElement(colors)
    const accentColor = randElement(colors)
    return {
        mainColor, accentColor, params: {}
    }
}

function randContacts() {
    const count = randInt(5) + 2;
    const elements = []
    for (var i = 0; i < count; i++) {
        elements.push(randContact())
    }
    return {
        mainContact: randElement(contactTypes),
        elements
    }
}

function generateAgency(name) {
    const key = generateKey(name)
    const logoUrl = randImage(300, 100, name)
    const mainLine = randomText(100, 300)
    const theme = randTheme()
    const contact = randContacts()
    return { key, name, logoUrl, mainLine, theme, contact }
}
function randPrice() {
    const value = ((randInt(100) + 40) * 1000000)
    return { currency: 'COP', value }
}

function generateProperty(agencyId) {
    const title = randomText(5, 20)
    const description = randomText(20, 500)
    const images = Array.from(Array(randInt(10) + 5).keys()).map(_ => randImage(600, 400))
    const features = {
        "age": randInt(10),
        "rooms": randInt(5),
        "bathrooms": randInt(3),
        "parkings": randInt(2),
        "builtArea": randInt(100) + 20,
        "totalArea": randInt(100) + 20
    }
    const prices = {
        "sale": [randPrice()]
    }
    const location = {
        "country": "co", "state": "cundinamarca",
        "city": "bogota", "sector": "engativa", "neighborhood": "Gran granada"
    }
    return { agency: agencyId, title, description, images, features, location, prices }
}


async function insertAgencies() {
    await AgencyModel.deleteMany({})
    await PropertyModel.deleteMany({})

    const agencies = await AgencyModel.insertMany(AgencyNames.map(a => generateAgency(a)))
    for (let agency of agencies) {
        const propCount = randInt(40)
        const properties = Array.from(new Array(propCount).keys()).map(_ => generateProperty(agency._id))
        await PropertyModel.insertMany(properties)
    }
}


async function seed() {
    process.env['MONGODB_URI'] = "mongodb://inmoby:inmoby@thordickinson.ddns.net:7014/inmoby"
    await dbConnect()
    await insertAgencies()
}


seed().then(() => {
    process.exit(0)
}).catch(e => {
    console.log(e)
    process.exit(1)
})