const express = require("express") 
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const AuthRoute = require("./routes/AuthRoute")
const ProfileRoute = require("./routes/ProfileRouter")

const app = express()
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const ConnectMongoDb = async()=>{
    try {
         mongoose.connect(process.env.DATA_BASE_URL)
        console.log("Databse connected successfully")
    } catch (error) {
        console.log(error)
    }
}




app.use("/api",AuthRoute)
app.use("/api",ProfileRoute)


app.listen(8000, ()=>{
    console.log("server runing on port 8000")
    ConnectMongoDb()
})