FROM node:alpine

WORKDIR /usr/src/app

COPY . .

RUN apk add --no-cache make gcc g++ python3 && \
  npm install && \
  npm rebuild bcrypt --build-from-source && \
  apk del make gcc g++ python3

EXPOSE 3000