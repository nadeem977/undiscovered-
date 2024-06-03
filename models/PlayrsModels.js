const mongoose = require("mongoose");

const SeasonSchema = new mongoose.Schema({
  season: {
    type: String,
  },
  role: {
    type: String,
  },
  city: {  
    type: String,
  },
  result: {
    type: String,
  },
  team: {
    type: String,
  },
});
const offers = new mongoose.Schema({
  uniname: {
    type: String,
  },
  date: {
    type: String,
  },
  img: {
    type: String,
    default: "",
  },
  verify: {
    type: Boolean,
    default: false, 
  },
 
});

const RecruitesSchema = new mongoose.Schema({
  name: String,
  img: String, 
  height:String,
  year:String,
  playerId:String
});
const articleSchema = new mongoose.Schema({
  title: String,
  desc: String,
  banner: { 
    type: String,
    default: "",
  },
  Recruites: [RecruitesSchema], 
}, { timestamps: true });
const PlayrsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    university: {
      type: String,
    },
    height: {
      type: String,
    },
    aboutPlayr: {
      type: String,
    },
    speciality: {
      type: String,
    },
    weight: {
      type: String,
    },
    currentTeam: {
      type: String,
    },
    year: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    club: {
      type: String,
    },
    role: {
      type: String,
    },
    email: {
      type: String,
    },
    PST: {
      type: String,
    },
    AST: {
      type: String,
    },
    REB: {
      type: String,
    },
    FG: {
      type: String,
    },
    PTS: {
      type: String,
    },
    Seasons: [SeasonSchema],
    Images: {
      type: Array,
    },
    Videos: {
      type: Array,
    },
    Offers: [offers],
    Article: [articleSchema],
    instagram:{
      type:String,
      default:""
    },
    facebook:{
      type:String,
      default:""
    },
    youtube:{
      type:String,
      default:""
    },
    twitter:{
      type:String,
      default:""
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", PlayrsSchema);

module.exports = Profile;
