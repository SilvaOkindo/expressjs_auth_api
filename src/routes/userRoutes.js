const express = require("express")

const router = express.Router()


router.get("/admin", (req, res) => {
    res.json({message: "admin router"})
})

router.get("/user", (req, res) => {
    res.json({message: "user router"})
})

router.get("/manager", (req, res) => {
    res.json({message: "manager router"})
})


module.exports = router