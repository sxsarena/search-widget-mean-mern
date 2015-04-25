module.exports = function(grunt, options){

    return {
        vendor : {
            files: [{
                src : options.projectDev+'vendor/html5shiv/dist/html5shiv.min.js',
                dest: options.projectDir+'vendor/html5shiv.min.js'
            }, {
                src : options.projectDev+'vendor/respond/dest/respond.min.js',
                dest: options.projectDir+'vendor/respond.min.js'
            }, {
                src : options.projectDev+'vendor/jquery/dist/jquery.min.js',
                dest: options.projectDir+'vendor/jquery.min.js'
            }]
        },
        fonts : {
            files: [{
                expand: true,
                cwd   : options.projectDev+'fonts/',
                src   : '{,*/,**/}*.{otf,eot,svg,ttf,woff}',
                dest  : options.projectDir+'css/fonts/'
            }]
        }
    };
};
