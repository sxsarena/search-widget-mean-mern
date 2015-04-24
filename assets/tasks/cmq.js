module.exports = function(grunt, options){
    return {
		widget: {
            files: [{
                expand: true,
                cwd: options.projectDir+'/css/widget/',
                src: ['*.css'],
                dest: options.projectDir+'/css/widget/'
            }]
        }
    };
};
