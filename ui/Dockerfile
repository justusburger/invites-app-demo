FROM node:15.12.0-alpine3.10 as build

WORKDIR /app
ADD package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production
ADD . ./
RUN yarn build

FROM nginx:alpine as runtime

RUN apk update && apk upgrade && apk add bash

COPY --from=build /app/build/ /usr/share/nginx/html/

COPY ./nginx-entrypoint.sh /nginx-entrypoint.sh
RUN chmod +x /nginx-entrypoint.sh
COPY ./scripts/wait-for-it.sh /scripts/wait-for-it.sh
RUN chmod +x /scripts/wait-for-it.sh

COPY ./nginx.conf /etc/nginx/nginx.conf.template

CMD ["/bin/sh", "/nginx-entrypoint.sh"]