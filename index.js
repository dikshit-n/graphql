const cors = require("cors")
const express = require("express")
const {createServer} = require("http")
const {ApolloServer} = require("apollo-server-express")
const app = express()
app.use(cors())


//////MongoDB
require("./database/mongoose")


//////Importing Resolvers and Schema
const typeDefs = require("./schema")
const resolvers = require("./resolvers/index")


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context : ({ req }) => ({ req })
})

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);

httpServer.listen({ port: 5000 }, () => {
    console.log(`server ready at http://localhost:${5000}${server.graphqlPath}`);

  });
