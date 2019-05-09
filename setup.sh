#!/bin/sh
if [ ! -x "$(command -v docker)" ]; then
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
fi
if [ ! -x "$(command -v npm)" ]; then
    sudo apt install nodejs npm
fi

npm install