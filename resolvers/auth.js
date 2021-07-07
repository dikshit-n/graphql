const {login} = require("../auth/auth")


const Query  = {
    login : (_,args,context,info)=> login(args)
}




module.exports = {
    Query
}