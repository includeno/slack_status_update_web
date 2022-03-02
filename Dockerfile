From node:16.14.0-buster-slim

WORKDIR /app
ADD . /app

CMD node /app/main.js