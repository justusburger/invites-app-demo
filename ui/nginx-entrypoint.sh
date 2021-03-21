#! /bin/sh

envsubst '${SERVER_URL}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

./scripts/wait-for-it.sh -h ${SERVER_HOST} -p ${SERVER_PORT} -t 60

exec nginx -g 'daemon off;'