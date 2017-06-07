#!/bin/bash
cp ../Gulpfile.js .
cp ../package.json .
cp ../server.js .
cp -rf ../app/* app
cp -rf ../swagger/* swagger
docker-compose build
