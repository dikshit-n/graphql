const {login} = require("../auth/auth")

const authResolver = require("./auth")
const userResolver = require("./user")


module.exports =
    [authResolver,
    userResolver]
