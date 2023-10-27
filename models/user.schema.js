const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    username : String,
    password : String
})

const usermodule = new mongoose.model("Users",userschema)

module.exports = usermodule