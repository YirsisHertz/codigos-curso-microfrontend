FROM node:16.17.0-alpine

RUN mkdir app

WORKDIR /app

COPY ./package.json .

RUN yarn install

COPY ./ .

RUN yarn build

RUN npm i -g http-server

EXPOSE 8084
CMD [ "http-server", "dist", "-p", "8084"]
