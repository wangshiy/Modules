// Enable ES6 (with modules) via Babel
require('babel-register');

exports.config = {
  directConnect: true,
  specs: [
    'test/e2e/*_spec.js',
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8080'
  // Run "npm start" in another window so it can be tested.
  // Alternative setting to use ABC example app online:
  // baseUrl: 'http://swapp.angularbootcamp.com/'
};
