const express = require("express")
const verifyToken = require("../middleware/authMiddleware")
const authorizeRoles = require("../middleware/rolesMiddleware")

const router = express.Router()


router.get("/admin", 
    verifyToken, 
    authorizeRoles("admin"), 
     (req, res) => {
    res.json({message: "admin router"})
})

router.get("/user", verifyToken,
     authorizeRoles("user", "manager", "admin"),
     (req, res) => {
    res.json({message: "user router"})
})

router.get("/manager",
     verifyToken, authorizeRoles("admin", "manager"),
      (req, res) => {
    res.json({message: "manager router"}) 
})


module.exports = router