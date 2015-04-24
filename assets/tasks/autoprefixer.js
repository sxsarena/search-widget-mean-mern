module.exports = function(grunt, options){
    return {
		widget: {
			options: {
				browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            multiple_files: [{
                expand: true,
      			flatten: true,
                src : options.projectDir+'/css/widget/*.css',
                dest: options.projectDir+'/css/widget/'
            }]
        }
    };
};
