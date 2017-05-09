// Karma configuration

module.exports = function(config) {
  config.set({
    basePath: '..',
    frameworks: ['jasmine'],
    files: [
      '../lib/angular/angular.js',
      '../lib/angular-mocks/angular-mocks.js',
      '*.js',
      'unit-tests/*.spec.js'
    ],
    exclude: [
    ],
    reporters: ['progress'],
    port: 8080,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    captureTimeout: 60000,
    singleRun: false
  });
};
