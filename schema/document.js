const gql = require("graphql-tag")

module.exports = gql`

extend type Query{
    getPosts : [Post]!
}

type Post{
    name : String!,
    description : String!,
    userId : String!
}

`