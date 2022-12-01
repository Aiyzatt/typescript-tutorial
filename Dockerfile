FROM node:lts-buster-slim
WORKDIR /app

COPY ./src/typescript ./
RUN npm install
RUN tsc --init