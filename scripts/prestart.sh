#! /bin/bash
PATH=$(npm bin):$PATH
export 

function initialize_back_end () {
  printf "\n> ASYNC: Instalando o back-end e inicializando o banco de dados com o ORM\n"
  (
    cd ./backend
    cacheFolderBack="/tmp/desafio-biud-app-back-end-dev-cache"
    rm -rf $cacheFolderBack
    npm_config_loglevel=silent npm install --cache $cacheFolderBack
    npx sequelize-cli db:drop
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
    pm2 list
    x-www-browser http://localhost:3000
  )
}

function initialize_front_end() {
  printf "\n> ASYNC: Instalando o front-end\n"
  (
    cd ./frontend
    cacheFolderFront="/tmp/desafio-biud-front-end-dev-cache"
    rm -rf $cacheFolderFront
    npm_config_loglevel=silent npm install --cache $cacheFolderFront
  )
}

initialize_back_end & initialize_front_end

printf "\n> Script terminado\n\n"