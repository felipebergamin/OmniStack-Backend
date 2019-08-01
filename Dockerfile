FROM node:latest

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .

RUN npm i -g yarn
RUN yarn install

COPY . .

EXPOSE 3333
CMD [ "yarn", "start" ]
