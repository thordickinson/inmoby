const joi = require("@hapi/joi")
const { validateQuery, validateParams } = require("../util/express")
const { getProperty } = require("./service")


const GetPropertySchema = joi.object({
    id: joi.string().required().length(24)
})

async function handleGetProperty(req, res) {
    const { id } = await validateParams(GetPropertySchema, req)
    const property = await getProperty(id)
    res.json(property)
}

module.exports = { handleGetProperty }