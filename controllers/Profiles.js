const Profile = require("../models/PlayrsModels");
const fs = require("fs-extra");
const path = require("path");
const fsExtra = require("fs-extra");

const CreateProfile = async (req, res) => {
  try {
    const imageName = req.file ? req.file.filename : "";
    const newProfile = new Profile({
      name: req.body.name,
      height: req.body.height,
      aboutPlayr: req.body.aboutPlayr,
      speciality: req.body.speciality,
      division: req.body.division,
      teamName: req.body.teamName,
      weight: req.body.weight,
      currentTeam: req.body.currentTeam,
      year: req.body.year,
      result: req.body.result,
      image: imageName,
      season: req.body.season,
      club: req.body.club,
      team: req.body.team,
      email: req.body.email,
      university: req.body.university,
      role: req.body.role,
      PTS: req.body.PTS,
      AST: req.body.AST,
      REB: req.body.REB,
      FG: req.body.FG,
    });

    if (newProfile) {
      await newProfile.save();
      res.status(200).send(newProfile);
    }
  } catch (error) {
    console.log(error);
    res.status(200).send(error);
  }
};
const GetProfile = async (req, res) => {
  try {
    const getprofiles = await Profile.find({});
    if (getprofiles) {
      res.status(200).send(getprofiles);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const findOneProfile = async (req, res) => {
  try {
    const videoprofile = await Profile.findOne({ _id: req.body.Id });
    if (videoprofile) {
      res.status(200).send(videoprofile);
    } else {
      res.status(404).send("profile not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const DeleteProfile = async (req, res) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.body.Id);
    if (profile && req.body.image) {
      const imagePath = path.join(__dirname, "..", "public", req.body.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }

      if (profile.Article) {
        for (const article of profile.Article) {
          const folderPath = path.join(
            __dirname,
            "..",
            "public",
            article.title.slice(0, 5).trim()
          );
          if (fs.existsSync(folderPath)) {
            await fsExtra.remove(folderPath);
          }
        }
      }

      if (profile.email) {
        const emailFolderPath = path.join(
          __dirname,
          "..",
          "public",
          profile.email
        );
        if (fs.existsSync(emailFolderPath)) {
          await fsExtra.remove(emailFolderPath);
        }
      }
    }
    res.status(200).send("Profile deleted successfully");
  } catch (error) {
    console.log("Error deleting profile:", error);
    res.status(500).send("Error deleting profile");
  }
};
const getUserProfile = async (req, res) => {
  try {
    const userinfo = await Profile.findOne({ email: req.body.email });
    if (userinfo) {
      res.status(200).send(userinfo);
    } else {
      res.status(200).send("this user dose not have any profile yat");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const uploadVideos = async (req, res) => {
  try {
    if (req.file) {
      const findPrev = await Profile.findOne({ email: req.body.email });
      findPrev.Videos.push(req.file.filename);
      await findPrev.save();
      res.status(200).send("video uploaded");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const uploadingImages = async (req, res) => {
  try {
    if (req.file) {
      const checkimage = await Profile.findOne({ email: req.body.email });
      checkimage.Images.push(req.file.filename);
      await checkimage.save();
      res.status(200).send("image uploaded");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const RemovingImg = async (req, res) => {
  try {
    var findimg = await Profile.findOne({ email: req.body.email });
    if (findimg) {
      findimg.Images = findimg.Images.filter((item) => item !== req.body.image);
      if (req.body.image) {
        const imagePath = path.join(__dirname, "..", "public", req.body.image);
        if (fs.existsSync(imagePath)) {
          fs.unlink(imagePath, (err) => {
            if (err) {
              res.status(500).send("Error deleting image");
            } else {
              findimg.save();
              res.status(200).send(findimg);
            }
          });
        } else {
          console.log("Image file does not exist");
          res.status(404).send("Image file does not exist");
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
const RemovingVideos = async (req, res) => {
  try {
    var findiVideo = await Profile.findOne({ email: req.body.email });
    if (findiVideo) {
      findiVideo.Videos = findiVideo.Videos.filter(
        (item) => item !== req.body.video
      );
      if (req.body.video) {
        const imagePath = path.join(__dirname, "..", "public", req.body.video);
        if (fs.existsSync(imagePath)) {
          fs.unlink(imagePath, (err) => {
            if (err) {
              res.status(500).send("Error deleting image");
            } else {
              findiVideo.save();
              res.status(200).send(findiVideo);
            }
          });
        } else {
          console.log("Image file does not exist");
          res.status(404).send("Image file does not exist");
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};
const addNewSeason = async (req, res) => {
  try {
    const findUser = await Profile.findOne({ email: req.body.email });
    if (findUser) {
      const data = {
        role: req.body.role,
        city: req.body.city,
        result: req.body.result,
        season: req.body.season,
        team: req.body.team,
      };
      findUser.Seasons.push(data);
      await findUser.save();
      res.status(200).send(findUser);
    } else {
      res.status(404).send("email not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const updateProfile = async (req, res) => {
  try {
    if (req.file) {
      const newData = {
        name: req.body.name,
        height: req.body.height,
        aboutPlayr: req.body.aboutPlayr,
        speciality: req.body.speciality,
        weight: req.body.weight,
        currentTeam: req.body.currentTeam,
        year: req.body.year,
        image: req.file.filename,
        club: req.body.club,
        email: req.body.email,
        university: req.body.university,
        role: req.body.role,
        PTS: req.body.PTS,
        AST: req.body.AST,
        REB: req.body.REB,
        FG: req.body.FG,
      };
      const findProfile = await Profile.findOneAndUpdate(
        { email: req.body.email },
        newData,
        { new: true }
      );
      if (req.body.oldImg) {
        const imagePath = path.join(__dirname, "..", "public", req.body.oldImg);
        if (fs.existsSync(imagePath)) {
          fs.unlink(imagePath, (err) => {
            if (err) {
              console.error("Error deleting image:", err);
              res.status(500).send("Error deleting image");
            } else {
              console.log("Image deleted successfully");
              res.status(200).send(findProfile);
            }
          });
        } else {
          console.log("Image file does not exist");
          res.status(404).send("Image file does not exist");
        }
      }
    } else {
      const newData = {
        name: req.body.name,
        height: req.body.height,
        aboutPlayr: req.body.aboutPlayr,
        speciality: req.body.speciality,
        weight: req.body.weight,
        currentTeam: req.body.currentTeam,
        year: req.body.year,
        image: req.body.oldImg,
        club: req.body.club,
        email: req.body.email,
        university: req.body.university,
        role: req.body.role,
        PTS: req.body.PTS,
        AST: req.body.AST,
        REB: req.body.REB,
        FG: req.body.FG,
      };
      const findProfile = await Profile.findOneAndUpdate(
        { email: req.body.email },
        newData,
        { new: true }
      );
      if (findProfile) {
        res.status(200).send(findProfile);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const CreatingOffers = async (req, res) => {
  try {
    const findData = await Profile.findOne({ email: req.body.email });
    if (findData) {
      const newData = {
        uniname: req.body.uniname,
        date: req.body.date,
      };
      findData.Offers.push(newData);
      await findData.save();
      res.status(200).send("offers created by user");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
const UpdatingOffers = async (req, res) => {
  try {
    // const images = req.files.map((item) => item.filename);

    const findOffers = await Profile.findOne({ email: req.body.email });
    if (!findOffers) {
      return res.status(404).send("Profile not found for the given email.");
    }
    for (let i = 0; i < findOffers.Offers.length; i++) {
      const offer = findOffers.Offers[i];
      if (offer._id.equals(req.body.Id)) {
        offer.img = req.file.filename;
        // offer.logo = images[1];
        offer.verify = true;
        break;
      }
    }
    await findOffers.save();
    res.status(200).send("Offers updated successfully.");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const CreatingArticle = async (req, res) => {
  try {
    const findArticle = await Profile.findOne({ _id: req.body.Id });
    if (!findArticle) {
      return res.status(404).send("Profile not found for the given email.");
    }
    // const images = req?.files?.map((item) => item?.filename);
    const data = {
      title: req.body.title,
      desc: req.body.desc,
      // img: images ? images[0] : "",
      banner: req?.file ? req?.file?.filename : "",
    };
    findArticle.Article.push(data);
    await findArticle.save();
    return res.status(200).send("Article created successfully.");
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
};
const GetArticals = async (req, res) => {
  try {
    const profileId = req.body.profileId;
    const articleId = req.body.articleId;
    const profile = await Profile.findOne({ _id: profileId });
    if (profile) {
      const article = profile.Article.find((item) =>
        item._id.equals(articleId)
      );
      if (article) {
        res.status(200).send(article);
      } else {
        res.status(404).send("Article not found");
      }
    } else {
      res.status(404).send("Profile not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
const RemovingArticles = async (req, res) => {
  try {
    const profilfind = await Profile.findOne({ _id: req.body.profileId });
    if (profilfind) {
      profilfind.Article = profilfind.Article.filter(
        (item) => !item._id.equals(req.body.Id)
      );
      await profilfind.save();
      if (req.body.title) {
        const imagePath = path.join(
          __dirname,
          "..",
          "public",
          req.body.title.slice(0, 5).trim()
        );
        if (fs.existsSync(imagePath)) {
          await fs.remove(imagePath);
          res.status(200).send(profilfind);
        } else {
          res.status(200).send(profilfind);
        }
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const AddnewRecruiter = async (req, res) => {
  try {
    const profilArticle = await Profile.findOne({ _id: req.body.profileId });
    if (profilArticle) {
      const data ={
        name:req.body.name,
        height:req.body.height,
        year:req.body.year,
        img:req.body.img, 
        playerId:req.body.playerId
      }
 
      for (let i = 0; i < profilArticle.Article.length; i++) {
        const val = profilArticle.Article[i];
        if (val._id.equals(req.body.ArticleId)) {
          val.Recruites.push(data);
          break;
        }
      }
      await profilArticle.save();
      res.status(200).send("Article updated");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const RemovingArticleUsers = async (req, res) => {
  try {
 
    const profile = await Profile.findOne({ _id: req.body.profileId });
    if (profile) {
      for (let i = 0; i < profile.Article.length; i++) {
        let articles = profile.Article[i];
        if (articles.equals(req.body.articleId)) {
          if (articles.Recruites && Array.isArray(articles.Recruites)) {
            articles.Recruites = articles.Recruites.filter((item) => !item._id.equals(req.body.recruites));
          } 
          break;
        } 
      }
      
      await profile.save();
      res.status(200).send("Recruiter removed from article");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};


module.exports = {
  CreateProfile,
  GetProfile,
  uploadingImages,
  DeleteProfile,
  getUserProfile,
  uploadVideos,
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
};
