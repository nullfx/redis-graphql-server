#!/bin/sh

if [ ! -x "$(docker ps | grep -e "redis-server")" ]; then
    docker container rm redis-server
    docker image rm redis --force
    docker run -p 6379:6379 --name redis-server -d redis
fi

npm start