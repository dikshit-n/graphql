const {UserInputError} = require("apollo-server")
const {compareSync} = require("bcrypt")
const {sign} = require("jsonwebtoken")

require('dotenv').config()
const jwtSecret = process.env.JWT_SECRET

const User = require("../models/user")



const login = async(data)=>{
    try {
        
        const {email, password} = data
        var user = await User.findOne({email})
        
        
        if(!user) return new UserInputError("Invalid Email or Password!")

        if(!compareSync(password, user.password)) return new UserInputError("Invalid Email or Password!")

        var token = sign({
            _id : user._id,
            type : "user"
        },jwtSecret)

        await User.updateOne({_id : user._id},{
            $push : { jwt : token}
        })

        return user

        
    } catch (error) {

        console.log(error)
        return new UserInputError("Invalid Username or Password!")
        
    }
}

module.exports = {
    login
}