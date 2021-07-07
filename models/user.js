const {Schema, model} = require("mongoose")


var userSchema = new Schema({

name : String,

email : String,

password : String,

jwt : Array

})



var user = model("user",userSchema)

module.exports = user