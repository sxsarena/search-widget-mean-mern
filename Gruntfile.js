module.exports = function(grunt) {
    // Conta o tempo das tasks facilitando a identificação de tasks carroça
    require('time-grunt')(grunt);

    // Carrega as configurações
    var path = require('path');
    require('load-grunt-config')(grunt, {
        init: true,
        configPath: path.join(process.cwd(), 'assets/tasks'),
        data: {
            projectDir  : 'public/assets/app/',
            projectDev  : 'assets/src/',
            pkg: grunt.file.readJSON('package.json')
        }
    });

};
