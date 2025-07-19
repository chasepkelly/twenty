#!/bin/sh
# Only set PG_DATABASE_URL if it's not already defined (for Railway compatibility)
if [ -z "$PG_DATABASE_URL" ]; then
  export PG_DATABASE_URL=postgres://postgres:postgres@$PG_DATABASE_HOST:$PG_DATABASE_PORT/default
fi
yarn database:init:prod
node dist/src/main
