const mongoose = require("mongoose");

const PlayrsSchema = mongoose.Schema({
  name: {
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
  division: {
    type: String,
  },
  teamName: {
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
  result: {
    type: String,
  },
  image: {
    type: String,
   },
  season: {
    type: String,
  },
  club: {
    type: String,
  },
  team: {
    type: String,
  },
  email: {
    type: String,
  },
});

const Profile = mongoose.model("Profile", PlayrsSchema);

module.exports = Profile;
