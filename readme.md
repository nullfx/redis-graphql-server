# Redis Server
this is a redis based graph-ql server

# Usage
to install clone this repository, then run

```bash
sh setup.sh
```

to install any missing dependencies (docker, nodejs, npm, and dependent node modules)

run

```bash
sh run.sh
```

to start the redis docker container, and start the graph-ql front end.  

to access the playground browse to: 

```html
http://localhost:8086/graphql
```

# Configuration
by default run.sh creates a local redis container and connects to it.  if you have a stand-alone redis server not running locally, you can edit the `.env` file and specify the new server host name or ip, along with whatever port it may be running under

you can specify an alternate graph-ql port here as well

```bash
# .env

REDIS_SERVERNAME=localhost
REDIS_PORT=6379
GRAPHQL_PORT=8086
```