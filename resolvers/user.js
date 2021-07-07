const {add_user, view_users, view_user} = require("../controllers/user")
const {login} = require("../auth/auth")

const verifyAuth = require("../auth/verify.auth")

const User = require("../models/user")


const Query = {

    //Get All Users
    getUsers : async(_,args, context, info)=>{
        var userData = await verifyAuth(context)
        return view_users(userData)
    },

    getUser : async(_,args,context,info)=> {
        var userData = await verifyAuth(context)
        return view_user(userData)
    },

}


const Mutation = {
    addUser : (parent, args, context, info)=> add_user(args)
}

module.exports = {
    Query,
   Mutation 
}
