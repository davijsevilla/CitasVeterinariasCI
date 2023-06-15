FROM node:18

WORKDIR /app

COPY package.json .
RUN nmp install
COPY . .
CMD npm start


