import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import redis from 'redis'
import bluebird from 'bluebird'
import dotenv from 'dotenv'
import typeDefs from './schema'
import resolvers from './resolvers'

dotenv.config()
const REDIS_SERVER = process.env.REDIS_SERVERNAME
const REDIS_PORT = process.env.REDIS_PORT
const PORT = process.env.GRAPHQL_PORT

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)
const client = redis.createClient(REDIS_PORT, REDIS_SERVER)
client.on("error", err=>{ console.log(`General Error: ${err}`) })

const app = express()
const server = new ApolloServer( { 
    typeDefs, 
    resolvers,
    context: { client },
    introspection: true,
    playground: true
} )

server.applyMiddleware( { app } )

app.listen( { port: PORT }, () => {
    console.log(`server started at http://localhost:${PORT}${server.graphqlPath}`)
})