const mongoose = require("mongoose");

const AuthSchema =new mongoose.Schema(
  {
    username: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
    },
    admin:{
      type:Boolean,
      default:false
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", AuthSchema);

module.exports = User;
