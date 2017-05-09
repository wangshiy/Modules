(function (angular) {
  'use strict';

  angular.module('promisesApp', ['promise_utils'])
    .controller('MyController', MyController)
    .service('colors', Colors);

  // Service implemented as a standalone constructor fn:
  function Colors($http) {
    function extractDataLength(v) {
      return v.data.length;
    }

    this.get = function get() {
      return $http.get('../demo-data/colors.json')
        .then(extractDataLength);
    };
  }

  function MyController($q, colors, promiseSleep) {
    const mc = this;

    // Another way to create a promise
    const p1 = $q((resolve, reject) => {
      mc.go1 = function go1() {
        resolve(1);
      };
      mc.stop = function stop() {
        reject('oops');
      };
    });

    // We've seen this way before:
    const p2 = $q.resolve(5875);

    // Async services return promises:
    const colorsPromise = colors.get().then(promiseSleep(5000));

    const all = $q.all([p1, colorsPromise, p2]);

    all.then((answers) => {
      mc.message = 'The answers are: ' + answers[0] +
        ',' + answers[1] +
        ',' + answers[2];
    }).catch((e) => {
      mc.oops = e;
    });

    // Also possible to pass the error fn as a second then param.
    // all.then(function(answers) {
    //   mc.message = "The answers are: "+ answers[0] +
    //     "," + answers[1] +
    //     "," + answers[2];
    // },
    // function(e) {
    //   mc.oops = e;
    // });

  }

}(angular));
