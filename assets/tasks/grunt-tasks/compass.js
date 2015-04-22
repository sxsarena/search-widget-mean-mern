module.exports = function(grunt, options){
    return {
		widget: {
            options: {
                sassDir                : options.projectDev+'scss/widget',
                cssDir                 : options.projectDir+'css/widget',
                imagesDir              : options.projectDev+'img/widget',
				generatedImagesDir     : '/assets/app/css/img/widget/sprite',
				generatedImagesPath    : options.projectDir+'css/img/widget/sprite',
				httpGeneratedImagesPath: '/assets/app/css/img/widget/sprite',
                outputStyle            : 'compressed'
            }
        }
    };
};
