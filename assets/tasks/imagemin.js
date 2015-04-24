module.exports = function(grunt, options){

	var mozjpeg = require('imagemin-mozjpeg');

    return {
		widget: {
			options: {
				optimizationLevel: 7,
				svgoPlugins: [{ removeViewBox: false }],
				use: [mozjpeg()]
			},
            files: [{
                expand: true,
                cwd: options.projectDev+'img/widget/',
                src: [
	                'global/{,*/,**/,**/*,**/**}*.{png,jpg,gif}'
                ],
                dest: options.projectDir+'css/img/widget/'
            }]
        }
    };
};
