# Redis GraphQL Server

This is a redis based graph-ql server using [Node Redis](https://github.com/noderedis/node_redis) and [Apollo Server](https://github.com/apollographql/apollo-server) and [Babel](https://new.babeljs.io/)

#### Queries

- [get      ( key: String! ): String](https://redis.io/commands/get)
- [getrange ( key: String!, start: Int!, end: Int! ): String](https://redis.io/commands/getrange)
- [keys     ( pattern: String! ): [String]!](https://redis.io/commands/keys)
- [mget     ( keys: [String]! ): String](https://redis.io/commands/mget)
- [pttl     ( key: String! ): Int!](https://redis.io/commands/pttl)
- [strlen   ( key: String! ): Int!](https://redis.io/commands/strlen)
- [ttl      ( key: String! ): Int!](https://redis.io/commands/ttl)


#### Mutations

- [append   ( key: String!, value: String! ): Int!](https://redis.io/commands/append)
- [decr     ( key: String! ): Int!](https://redis.io/commands/decr)
- [decrby   ( key: String!, decrement: Int! ): Int!](https://redis.io/commands/decrby)
- [del      ( key: String! ): Int!](https://redis.io/commands/del)
- [expire   ( key: String!, seconds: Int! ): Int!](https://redis.io/commands/expire)
- [incr     ( key: String! ): Int!](https://redis.io/commands/incr)
- [incrby   ( key: String!, increment: Int! ): Int!](https://redis.io/commands/incrby)
- [rename   ( key: String!, newkey: String! ): Boolean!](https://redis.io/commands/rename)
- [renamenx ( key: String!, newkey: String! ): Int!](https://redis.io/commands/renamenx)
- [set      ( key: String!, value: String! ): Boolean!](https://redis.io/commands/set)
- [setex    ( key: String!, seconds: Int!, value: String! ): String!](https://redis.io/commands/setex)
- [setnx    ( key: String!, value: String! ): Boolean!](https://redis.io/commands/setnx)
- [setrange ( key: String!, offset: Int!, value: String! ): Int!](https://redis.io/commands/setnx)

## Usage

This module comes with some helper scripts, clone this repository, then run

```bash
sh setup.sh
```

to install any missing dependencies (docker, nodejs, npm, and dependent node modules).

Once dependencies have been installed / updated and downloaded you can run the server by running the following command

```bash
sh run.sh
```

which will start the redis docker container (if it hasn't been started), and start the graph-ql front end.  

Alternatively you can run

```bash
npm start
```

to run the graphql server, assuming your redis server is already up and running / you don't need the docker redis server that run.sh provides.

Once running you can access the GraphQL Playground by browsing to

```html
http://localhost:8086/graphql
```

Note, if you've modified the port in the `.env` file the URL displayed in the console when the app is running will display the location to browse to

## Configuration

By default `run.sh` creates a local redis container for the server to connect to.  If you have a stand-alone redis server you can edit the `.env` file and specify the new server host name or ip address and port which will allow the server to connect to redis regardless of where its running.

you can specify an alternate graph-ql server port here as well

```bash
# .env

# hostname or ip address of redis server
REDIS_SERVERNAME=localhost
# port where redis server is listening
REDIS_PORT=6379
# the port where the graphql service will listen
GRAPHQL_PORT=8086
```
