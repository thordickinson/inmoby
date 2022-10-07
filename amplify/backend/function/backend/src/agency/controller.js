const joi = require("@hapi/joi")
const { validateParams, validateBody } = require("../util/express")
const { findDealerByKey } = require("./service")


const AgencyParamsSchema = joi.object({
    key: joi.string().required().length(24)
})

async function handleGetAgencyByKey(req, res) {
    const { key } = await validateParams(AgencyParamsSchema, req)
    const dealer = await findDealerByKey(key)
    res.json(dealer)
}

module.exports = { handleGetAgencyByKey }

