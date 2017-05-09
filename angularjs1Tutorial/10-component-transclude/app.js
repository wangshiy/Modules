(function (angular) {
  'use strict';

  angular.module('myApp', [])
    .component('cardBlock', {
      templateUrl: 'card.html'
    })
    .component('wrapper', {
      transclude: true,
      templateUrl: 'wrapper.html'
    });

}(angular));
