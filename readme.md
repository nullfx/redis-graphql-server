# Redis Server
this is a redis based graph-ql server
#### Queries
- [get(key: String!): String](https://redis.io/commands/get)

#### Mutations
- [set(key: String!, value: String!): Boolean!](https://redis.io/commands/set)
- [del(key: String!): Boolean!](https://redis.io/commands/del)
- [incr(key: String!): Boolean!](https://redis.io/commands/INCR)
- [decr(key: String!): Boolean!](https://redis.io/commands/decr)
- [expire(key: String!, seconds: Int!): Boolean!](https://redis.io/commands/expire)
- [rename(key: String!, newkey: String!): Boolean!](https://redis.io/commands/rename)

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