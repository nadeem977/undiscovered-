const {
  CreateProfile,
  GetProfile,
  DeleteProfile,
  getUserProfile,
  uploadVideos,
  uploadingImages,
  RemovingImg,
  RemovingVideos,
  addNewSeason,
  updateProfile,
  findOneProfile,
  CreatingOffers,
  UpdatingOffers,
  CreatingArticle,
  GetArticals,
  RemovingArticles,
  AddnewRecruiter,
  RemovingArticleUsers,
  AddSocialLinks

} = require("../controllers/Profiles");
const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require('fs');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + ".png");
  },
});
const upload = multer({ storage: storage });

router.post("/CreateProfiles", upload.single("image"), CreateProfile);
router.get("/getProfileData", GetProfile);
router.post("/deleteProfile", DeleteProfile);
router.post("/UserProfile", getUserProfile);

const storageVideo = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + ".mp4");
  },
});
const uploadVideo = multer({ storage: storageVideo });

router.post("/UploadVideos", uploadVideo.single("video"), uploadVideos);
router.post("/uploadImages", upload.single("image"), uploadingImages);
router.post("/RemovingImage", RemovingImg);
router.post("/RemovingVideos", RemovingVideos); 
router.post("/CreatingTable", addNewSeason);
router.post("/UpdateProfiles", upload.single("image"),updateProfile)
router.post("/CreatingOffersUser",CreatingOffers)
router.post("/findOneProfile",findOneProfile)



const storageOffers = multer.diskStorage({
  destination: function (req, file, cb) {
    const email = req.body.email;  
    const uploadPath = path.join('public', email);   
    fs.mkdirSync(uploadPath, { recursive: true }); 
    cb(null, uploadPath);  
  },
  filename: function (req, file, cb) {
 
    cb(null, file.fieldname + "_" + Date.now() + ".png");
  }
});
const uploadoffers = multer({ storage: storageOffers });
router.post('/UpdateOffers', uploadoffers.single('image',1),UpdatingOffers );



router.post("/RemovingArticle",RemovingArticles)
router.post("/ArticleProfile",GetArticals)


const storageArticle = multer.diskStorage({
  destination: function (req, file, cb) { 
    const title = req.body.title.slice(0,5).trim(); 
    const uploadPath = path.join('public', title);   
    fs.mkdirSync(uploadPath, { recursive: true }); 
    cb(null, uploadPath);  
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + ".png");
  }
});
const uploadArticles = multer({ storage: storageArticle });
router.post("/ArticlesByAdmin",uploadArticles.single("image"),CreatingArticle)
router.post("/UpdateArticles",AddnewRecruiter)
router.post("/RemovingSignleUserFromArticle",RemovingArticleUsers)
router.post("/SocialsLinks",AddSocialLinks)
   






module.exports = router;
