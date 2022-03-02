From node:16.14.0-buster-slim

EXPOSE 80
WORKDIR /app
ADD . /app

CMD node /app/main.js