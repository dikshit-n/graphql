
const gql = require("graphql-tag")



module.exports = gql`

# Global Query
  extend type Query {
        getUsers : [User]!
        getUser : User!
        

    }

# Mutation
   extend type Mutation {
        addUser(userInput : UserInput) : User!
    }



# Data types for User Schema
    type User {

        name : String!
        email : String!
        password : String!
        _id : ID!
        token : String!
        type : String!
        
    }

#Input
    input UserInput {
        name : String!
        email : String!
        password : String!
    }




`