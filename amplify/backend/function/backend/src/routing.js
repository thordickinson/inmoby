const express = require('express')
const { handleGetAgencyByKey } = require('./agency/controller')
const { handleGetProperty } = require('./property/controller')
const { wrapAsync } = require('./util/express')
const router = express.Router()

router.get("/health", (req, res) => {
    res.json({ state: 'running' })
})

router.get("/agencies/:key", wrapAsync(handleGetAgencyByKey))
router.get("/properties/:id", wrapAsync(handleGetProperty))

module.exports = { router }