FROM node:latest

ADD . /var/app
WORKDIR /var/app
ENV GRAPHQL_PORT=80
EXPOSE 80
RUN npm i -g nodemon
RUN yarn install

ENTRYPOINT [ "yarn", "start" ]