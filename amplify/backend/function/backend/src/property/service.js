const { PropertyModel } = require("../schemas/base");
const { NotFoundError } = require("../util/exceptions");
var mongoose = require('mongoose');


async function getProperty(id) {
    const _id = new mongoose.Types.ObjectId(id)
    const property = await PropertyModel.findOne({ _id, active: true }).populate("agency").exec()
    if (!property) throw new NotFoundError(`Property with id ${id} does not exists`)
    return property
}

module.exports = { getProperty }
