const express = require("express")
const router = express.Router()

// define the homepage route 
router.get("/", (req, res) => {
    res.send("Blog is on way")
})

router.get("/about", (req, res) => {
    res.send("About Brids")
})

router.get("/blogpost/:slug", (req, res) => {
    res.send(`fetch the blog post for ${req.params.slug}`)
})



module.exports = router