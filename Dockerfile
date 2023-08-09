# build

FROM node:18-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn run build

# prod

FROM node:18-alpine

WORKDIR /urs/src/app

ENV NODE_ENV=production

COPY --from=build /usr/src/app/dist ./dist

COPY --from=build /usr/src/app/client ./client

COPY --from=build /usr/src/app/db ./db

COPY package*.json ./

RUN yarn install --production=true

RUN rm package*.json

EXPOSE 80

CMD ["node", "dist/main.js"]

