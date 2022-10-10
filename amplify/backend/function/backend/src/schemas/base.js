const mongoose = require("mongoose")

const PointSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
}, { _id: false, versionKey: false });

const PriceSchema = new mongoose.Schema({
    currency: String,
    value: Number
}, { _id: false, versionKey: false })

const MediaSchema = new mongoose.Schema({
    type: String,
    url: String
}, { _id: false, versionKey: false })

const ThemeSchema = new mongoose.Schema({
    mainColor: String,
    accentColor: String,
    params: {}
}, { _id: false, versionKey: false })

const ContactElementSchema = new mongoose.Schema({
    type: String,
    value: String
}, { _id: false, versionKey: false })

const ContactSchema = new mongoose.Schema({
    mainContact: String,
    elements: [ContactElementSchema]
}, { _id: false, versionKey: false })

const AgencySchema = new mongoose.Schema({
    name: { type: String, required: true },
    logoUrl: String,
    key: { type: String, index: true, required: true, unique: true },
    mainLine: String,
    theme: { type: ThemeSchema },
    createdAt: { type: Date, default: () => new Date() },
    contact: ContactSchema
}, { versionKey: false })

const AgentSchema = new mongoose.Schema({
    name: { type: String },
    agency: { type: mongoose.Types.ObjectId, ref: "Agency" },
    contact: ContactSchema,
}, { versionKey: false })

const PropertySchema = new mongoose.Schema({
    agency: { type: mongoose.Types.ObjectId, ref: "AgencyModel", index: true },
    active: { type: Boolean, default: true },
    title: String,
    description: String,
    agents: [AgentSchema],
    features: {},
    location: {},
    coordinates: { type: PointSchema, required: false },
    images: [String],
    media: [MediaSchema],
    prices: { type: Map, of: [PriceSchema] }
})

const AgencyModel = mongoose.models.AgencyModel || mongoose.model("AgencyModel", AgencySchema, "agencies")
const PropertyModel = mongoose.models.PropertyModel || mongoose.model("PropertySchema", PropertySchema, "properties")
const AgentModel = mongoose.models.AgentModel || mongoose.model("AgentModel", AgencySchema, "agents")

module.exports = { AgencyModel, PropertyModel, AgentModel }
