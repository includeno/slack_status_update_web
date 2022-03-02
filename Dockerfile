From node:16.14.0-buster-slim

EXPOSE 3000
WORKDIR /app
ADD . /app

CMD node /app/main.js