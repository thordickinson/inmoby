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
});

const PriceSchema = new mongoose.Schema({
    currency: String,
    value: Number
})

const MediaSchema = new mongoose.Schema({
    type: String,
    url: String
})

const ThemeSchema = new mongoose.Schema({
    mainColor: String,
    accentColor: String,
    params: {}
})

const ContactElementSchema = new mongoose.Schema({
    type: String,
    value: String
})

const ContactSchema = new mongoose.Schema({
    mainContact: String,
    elements: [ContactElementSchema]
})

const AgencySchema = new mongoose.Schema({
    name: String,
    logoUrl: String,
    key: { type: String },
    mainLine: String,
    theme: { type: ThemeSchema },
    contact: ContactSchema
})

const AgentSchema = new mongoose.Schema({
    name: String,
    agency: { type: mongoose.Types.ObjectId, ref: "Agency" },
    contact: ContactSchema
})

const PropertySchema = new mongoose.Schema({
    title: String,
    description: String,
    agents: [AgentSchema],
    features: {},
    location: {},
    coordinates: { type: PointSchema },
    images: [String],
    media: [MediaSchema],
    prices: { type: Map, of: PriceSchema }
})

const AgencyModel = mongoose.models.AgencyModel || mongoose.model("AgencyModel", AgencySchema, "agencies")
const PropertyModel = mongoose.models.PropertyModel || mongoose.model("PropertySchema", PropertySchema, "properties")
const AgentModel = mongoose.models.AgentModel || mongoose.model("AgentModel", AgencySchema, "agents")

module.exports = { AgencyModel, PropertyModel, AgentModel }
