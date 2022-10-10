const { AgencyModel } = require("../schemas/base")
const { NotFoundError } = require("../util/exceptions")

async function findDealerByKey(key) {
    const agency = await AgencyModel.findOne({ key })
    if (!agency) throw new NotFoundError(`Agency with key not found: ${key}`)
    return agency
}

module.exports = { findDealerByKey }