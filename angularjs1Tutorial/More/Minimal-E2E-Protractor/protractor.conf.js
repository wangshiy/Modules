// Enable Typescript in the test code
require('ts-node/register')

exports.config = {
  directConnect: true,
  specs: [
    '*_spec.ts',
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://swapp.angularbootcamp.com/'
};
