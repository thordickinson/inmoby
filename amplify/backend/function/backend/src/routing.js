const express = require('express')
const { handleGetAgencyByKey } = require('./agency/controller')
const { wrapAsync } = require('./util/express')
const router = express.Router()

router.get("/health", (req, res) => {
    res.json({ state: 'running' })
})

router.get("/agency/{key}", wrapAsync(handleGetAgencyByKey))

module.exports = { router }