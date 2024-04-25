const {CreateProfile,GetProfile} = require("../controllers/Profiles")
const express = require("express")
const multer = require('multer');
const path = require("path")

const router = express.Router()



const storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
        cb(null, './public');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now()+".png");
    }
});

const upload = multer({ storage: storage });

 
router.post("/CreateProfiles",upload.single('image'),CreateProfile)
router.get("/getProfileData",GetProfile)


module.exports = router ;