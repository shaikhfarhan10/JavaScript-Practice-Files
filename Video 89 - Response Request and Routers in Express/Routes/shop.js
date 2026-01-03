const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Shop home page")
})

router.get("/about", (req, res) => {
    res.send("About Shop")
})

router.get("/shoppost/:slug", (req, res) => {
    res.send(`fetch the shoppost from ${req.params.slug}`)
})

module.exports = router