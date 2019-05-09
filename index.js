import express from 'express'
import bodyParser from 'body-parser'
import { ApolloServer, gql, graphiqlExpress } from 'apollo-server-express'
import redis from 'redis'
import bluebird from 'bluebird'
import typeDefs from './schema'
import resolvers from './resolvers'

const PORT = 8086
const path = '/api'

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)
const client = redis.createClient()
client.on("error", err=>{ console.log(`General Error: ${err}`) })

const app = express()
const server = new ApolloServer( { 
    typeDefs, 
    resolvers,
    context: { client },
    introspection: true,
    playground: true
} )
server.applyMiddleware( { app, path } )

app.listen( { port: PORT }, () => {
    console.log(`server started at http://localhost:${PORT}${server.graphqlPath}`)
})