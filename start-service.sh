#!/bin/bash
# This script is for start service in docker
rm -rf node_modules/
curl --compressed -o- -L https://yarnpkg.com/install.sh | bash  
yarn install
yarn start
