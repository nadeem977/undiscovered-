const User = require("../models/Authantic")
const bcrypt = require("bcrypt")


const RegisterUser = async(req,res)=>{
    console.log(req.body)
    try {
        const hashpwd = bcrypt.hashSync(req.body.password, 9)
        const newUser = new User({
            username:req.body.username,
            lastname:req.body.lastname,
            email:req.body.email,
            phone:req.body.phone,
            password:hashpwd
        })
        if(newUser){
          await  newUser.save()
          res.status(200).send(newUser)
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}
 
const LoginUser = async (req,res)=>{
  
    try { 
        const findUser = await User.findOne({email:req.body.email})
        if(findUser){
          const matchpwd = bcrypt.compareSync(req.body.password, findUser.password)
          if(!matchpwd) return res.status(404).send("wrong password or email")
          res.status(200).send(findUser)
        }else{ 
            res.status(404).send("User with this email does not exist.")
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }  
}

module.exports = {RegisterUser,LoginUser};