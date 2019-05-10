FROM node

ADD . /var/app
WORKDIR /var/app
ENV GRAPHQL_PORT=80
EXPOSE 80
RUN npm install

ENTRYPOINT [ "npm", "start" ]