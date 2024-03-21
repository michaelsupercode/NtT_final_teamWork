#!/bin/bash
/usr/local/bin/npm install
cd ./client
/usr/local/bin/npm run build
cd ..

cd ./server
/usr/local/bin/npm/npm install