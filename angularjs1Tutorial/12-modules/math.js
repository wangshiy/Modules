(function (angular) {
  'use strict';

  angular.module('math', [])
    .component('mathWidget', {
      templateUrl: 'math.html',
      controller:  function () {
        this.add = (a, b) => parseFloat(a) + parseFloat(b);
      }
    });

}(angular));
