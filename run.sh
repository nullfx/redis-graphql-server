#!/bin/sh

if [ `docker ps | grep -c 'redis-server'` -le 0 ]; then
    docker container rm redis-server
    docker image rm redis --force
    docker run -p 6379:6379 --name redis-server -d redis
fi

yarn start