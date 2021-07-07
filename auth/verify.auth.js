const User = require("../models/user")
const {AuthenticationError} = require("apollo-server")
require('dotenv').config()

const {verify} = require("jsonwebtoken")


module.exports = async(context)=>{

    return new Promise(async(resolve,reject)=>{
            try {

            var bearerToken = context.req.headers.authorization
            if(!bearerToken) return reject(new AuthenticationError("Bearer Token Missing"))
    
            const token = bearerToken.split("Bearer ")[1]
            var decrypt = verify(token, process.env.JWT_SECRET)

            if(decrypt.type === "user"){
                var user = await User.countDocuments({jwt : token})
                if(user === 0) return reject(new AuthenticationError("Bearer Token Missing"))
            }
            
            return resolve(decrypt)

        } catch (error) {
            console.log(error)
            return reject(new AuthenticationError("Invalid Bearer Token"))
        }
        })
        
}