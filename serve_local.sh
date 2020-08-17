#!/bin/bash
# [dependencies]
# - elm, http-server

elm make --optimize src/Main.elm --output elm.js
mkdir ./dist
mv ./elm.js ./dist/
cp src/index.html ./dist/
cp src/assets ./dist/ -r
http-server dist
