module.exports = function(grunt, options){
    return {
		widget: {
            files: [{
                options: {
                    browsers: ['last 20 version', 'ie 7', 'ie 8', 'ie 9']
                },
                expand: true,
                cwd : options.projectDir+'/css/widget/',
                src : ['*.css'],
                dest: options.projectDir+'/css/widget/'
            }]
        }
    };
};
