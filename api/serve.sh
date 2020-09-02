#!/usr/bin/env bash

# Run this script from its folder
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR/

# Install json server
if [ ! -d "node_modules" ]; then
    npm install json-server
fi

# Run server
cp db-truth.json db.json
npx json-server db.json --id appName --routes routes.json
