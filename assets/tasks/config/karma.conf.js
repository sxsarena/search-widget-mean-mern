// Karma configuration
// Generated on Sat May 16 2015 20:49:39 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../../../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jquery-1.11.0', 'jasmine-jquery', 'jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'assets/src/vendor/jquery/dist/jquery.js',
        'assets/src/vendor/pickadate/lib/picker.js',
        'assets/src/vendor/pickadate/lib/picker.date.js',
        'assets/src/vendor/pickadate/lib/picker.time.js',
        'assets/src/vendor/pickadate/lib/legacy.js',
        'assets/src/vendor/pickadate/lib/translations/pt_BR.js',
        'assets/src/vendor/typeahead.js/dist/typeahead.bundle.min.js',

        'assets/src/js/widget/app/_config.js',
        'assets/src/js/widget/vendor/_plugins.js',
        'assets/src/js/widget/modules/_validation.js',
        'assets/src/js/widget/modules/_fromToPickadate.js',
        'assets/src/js/widget/modules/_util.js',
        'assets/src/js/widget/scripts.js',
        'test/client/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
