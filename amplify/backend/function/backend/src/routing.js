const express = require('express')
const { wrapAsync } = require('./util/express')
const router = express.Router()

router.get("/health", (req, res) => {
    res.json({ state: 'running' })
})


module.exports = { router }