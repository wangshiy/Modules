(function (angular) {
  'use strict';

  angular.module('promise_utils', [])
    .factory('promiseSleep', ($timeout) => {
      return function (ms) {
        return function (value) {
          return $timeout(() => {
            return value;
          }, ms);
        };
      };
    });

}(angular));
