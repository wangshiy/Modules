(function (angular) {
  'use strict';

  angular.module('promisesModule', [])
    .controller('PromiseController', PromiseController);

  function PromiseController($q) {

    const d1 = $q.defer();
    const p1 = d1.promise;

    const d2 = $q.defer();
    const p2 = d2.promise;

    this.go1 = function go1() {
      d1.resolve(1);
    };

    this.go2 = function go2() {
      d2.resolve(2);
    };

    this.stop1 = function() {
      d1.reject('oops');
    };

    $q.all([p1, p2]).then((results) => {
      console.log('success', results);
    }, (e) => {
      console.error('fail', e);
    });

  }

}(angular));
