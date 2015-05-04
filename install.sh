#!/bin/bash

npm install --allow-root -g grunt-cli bower

cd db/
mongoimport --db desafiohu --collection hotels --type json --file hotels.json --jsonArray
mongoimport --db desafiohu --collection availability --type json --file availability.json --jsonArray
