// Karma configuration

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      // "node_modules/jquery/jquery.js",
      "node_modules/angular/angular.js",
      "node_modules/angular-route/angular-route.js",
      "node_modules/angular-mocks/angular-mocks.js",
      'www/**/*.js',
      'test/**/*.js'
    ],
    exclude: [
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    captureTimeout: 60000,
    singleRun: false
  });
};
