const {RegisterUser,LoginUser} = require("../controllers/UserAuthantic")
const express = require("express")

const router = express.Router()

router.post("/Registration",RegisterUser)
router.post("/Login",LoginUser)

module.exports = router;