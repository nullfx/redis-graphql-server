# Redis GraphQL Server

this is a redis based graph-ql server using [Node Redis](https://github.com/noderedis/node_redis) and [Apollo Server](https://github.com/apollographql/apollo-server) and [Babel](https://new.babeljs.io/)

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

to install clone this repository, then run

```bash
sh setup.sh
```

to install any missing dependencies (docker, nodejs, npm, and dependent node modules)

once dependencies have been installed / updated and downloaded you can run the server by running the following command

```bash
sh run.sh
```

which will start the redis docker container (if it hasn't been started), and start the graph-ql front end.  

alternatively you can run

```bash
npm start
```

to run just the graphql server, assuming your redis server is already up and running

to access the playground UI browse to

```html
http://localhost:8086/graphql
```

if you've modified the port ctrl+click the url displayed in the start up console window

## Configuration

by default run.sh creates a local redis container and connects to it.  if you have a stand-alone redis server not running locally, you can edit the `.env` file and specify the new server host name or ip, along with whatever port it may be running under

you can specify an alternate graph-ql port here as well

```bash
# .env

REDIS_SERVERNAME=localhost
REDIS_PORT=6379
GRAPHQL_PORT=8086
```
