module.exports = function(grunt) {

    var dados_comuns_disponiveis_pra_todas_as_tasks = {
            projectName : 'Desafio Hotel Urbano',
            projectDir  : 'public/assets/app/',
            projectDev  : 'assets/src/',
            pkg: grunt.file.readJSON('package.json')
        };


    // Conta o tempo das tasks facilitando a identificação de tasks carroça
    require('time-grunt')(grunt);

    // Carrega configurações da pasta grunt-configs/
    var path = require('path');
    require('load-grunt-config')(grunt, {
        init: true,
        configPath: path.join(process.cwd(), 'assets/tasks'),
        data: dados_comuns_disponiveis_pra_todas_as_tasks
    });

};
