module.exports = function(grunt, options){
    return {
        widget: {
            files: [
                options.projectDev+'scss/widget/{,*/, **/, **/**/*,**/*}*.{scss}',
                options.projectDev+'js/widget/{,*/,**/}*.js',
                options.projectDir+'css/widget/{,*/, **/}*.css'
            ],
            tasks: ['widget']
        }
    };
};
