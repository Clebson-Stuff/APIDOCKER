FROM node:10

RUN apt-get update && apt-get install -y build-essential && apt-get install -y python

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD npm start
