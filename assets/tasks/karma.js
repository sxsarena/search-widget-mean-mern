module.exports = function(grunt, options){
    return {
        unit: {
            configFile: './assets/tasks/config/karma.conf.js',
            singleRun: true
        }
    }
};