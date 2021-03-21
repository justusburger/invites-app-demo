FROM node:15.12.0-alpine3.10

RUN apk update && apk upgrade && apk add bash

WORKDIR /app
ADD package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production
ADD . ./

RUN chmod +x ./server-entrypoint.sh
RUN chmod +x ./scripts/wait-for-it.sh

CMD ["sh", "server-entrypoint.sh"]