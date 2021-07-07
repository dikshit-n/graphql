const {Schema, model, Types} = require("mongoose")


var docSchema = new Schema({

name : String,

description : String,

userId : {
    type : Types.ObjectId,
    ref : "users"
}


})



var documents = model("documents",docSchema)

module.exports = documents