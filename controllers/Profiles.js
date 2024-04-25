const Profile = require("../models/PlayrsModels");
const fs = require("fs");
const path = require("path");






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
      image:imageName,
      season: req.body.season,
      club: req.body.club,
      team: req.body.team,
    email:req.body.email
    });

    if(newProfile){
        await newProfile.save()
        res.status(200).send(newProfile)
    }
  } catch (error) {
    console.log(error);
    res.status(200).send(error)
  }
}; 
const GetProfile =async (req,res) =>{

  try {
    const getprofiles =  await Profile.find({})
    if(getprofiles){
      res.status(200).send(getprofiles)
    }
  } catch (error) {
    console.log(error)
    res.status(500).send(error)
  }
}



module.exports = {CreateProfile,GetProfile};