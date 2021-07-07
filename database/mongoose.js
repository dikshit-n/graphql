const mongoose = require("mongoose")
const {config} = require("dotenv")
config()


var url = process.env.MONGO_URL

mongoose.connect(url,{

    useNewUrlParser : true,
    useCreateIndex  :true,
    useUnifiedTopology: true

},(err,res)=>{

    if(res) console.log("MongoDB Atlas Server Connected")

})

module.exports = mongoose
