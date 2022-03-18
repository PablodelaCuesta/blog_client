FROM node:lts-alpine

WORKDIR /app

COPY "package.json" ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY ./src ./app

ENTRYPOINT [ "npm", "start" ]
