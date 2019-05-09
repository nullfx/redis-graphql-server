#!/bin/sh

docker run -p 6379:6379 --name redis-server -d redis

npm start