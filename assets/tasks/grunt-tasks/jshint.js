module.exports = function(grunt, options){
    return {
    	options: {
            jshintrc: '.jshintrc'
        },
        all: ['Gruntfile.js', options.projectDev+'js/{,*/,**/}*.js'],
        widget: [options.projectDev+'js/widget/{,*/,**/}*.js']
    }
};
