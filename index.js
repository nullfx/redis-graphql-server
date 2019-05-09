import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import redis from 'redis'
import bluebird from 'bluebird'
import typeDefs from './schema'
import resolvers from './resolvers'

const PORT = 8086

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
server.applyMiddleware( { app } )

app.listen( { port: PORT }, () => {
    console.log(`server started at http://localhost:${PORT}${server.graphqlPath}`)
})