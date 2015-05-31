#!/bin/bash

if [ "$(uname)" == "Darwin" ]; then
    sudo bower install      
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then    
    sudo bower --allow-root install -s
elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ]; then
    bower install
else
	bower install
fi

grunt