// Karma configuration
// Generated on Sun Aug 20 2017 17:31:43 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'https://unpkg.com/jquery@3.2.1/dist/jquery.min.js',
        'https://unpkg.com/lodash@4.17.4/lodash.min.js',
        'https://unpkg.com/angular@1.6.6/angular.min.js',
        'https://unpkg.com/angular-ui-router@1.0.3/release/angular-ui-router.js',
        'https://unpkg.com/chart.js@2.6.0/dist/Chart.min.js',
        'https://unpkg.com/angular-chart.js@1.1.1/angular-chart.js',
        'https://unpkg.com/angular-mocks@1.6.6/angular-mocks.js',
        'app/app.js',
        'app/components/**/*.js'

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
    reporters: ['progress'],


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
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
