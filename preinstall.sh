#!/bin/bash

if [ "$(uname)" == "Darwin" ]; then
    sudo npm install -g grunt-cli bower       
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then    
    sudo npm install --allow-root -g grunt-cli bower
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ]; then
    npm install -g grunt-cli bower
else
	npm install -g grunt-cli bower
fi

cd db/
mongoimport --db desafiohu --collection hotels --type json --file hotels.json --jsonArray
mongoimport --db desafiohu --collection availability --type json --file availability.json --jsonArray
