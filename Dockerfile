FROM node:14-alpine

WORKDIR /srv/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 4040

CMD ["yarn", "start"]
