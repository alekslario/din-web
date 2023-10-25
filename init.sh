#!/bin/bash
sudo apt-get update
wget https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh
bash install.sh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install v16.17.0
npm install pm2 -g