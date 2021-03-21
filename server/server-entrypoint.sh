#! /bin/sh

./scripts/wait-for-it.sh -h ${DB_HOST} -p ${DB_PORT} -t 60

yarn db:sync

yarn start