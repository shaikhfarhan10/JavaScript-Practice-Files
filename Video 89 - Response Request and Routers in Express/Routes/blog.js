const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Blog home page")
})

router.get("/about", (req, res) => {
    res.send("About Blogs")
})

router.get("/blogpost/:slug", (req, res) => {
    res.send(`fetch the blogpost from ${req.params.slug}`)
})

module.exports = router