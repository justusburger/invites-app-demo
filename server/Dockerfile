FROM node:15.12.0-alpine3.10

WORKDIR /app
ADD package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production
ADD . ./

CMD ["npm", "start"]