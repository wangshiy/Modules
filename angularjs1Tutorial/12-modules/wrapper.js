(function (angular) {
  'use strict';

  angular.module('wrapper', [])
    .component('wrapper', {
      transclude: true,
      templateUrl: 'wrapper.html',
    });

}(angular));
