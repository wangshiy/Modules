(function (angular) {
  'use strict';

  angular.module('myApp', [])
    .component('cardBlock', {
      templateUrl: 'card.html'
    })
    .component('wrapper', {
      transclude: {
        head: '?header',
        body: 'content'
      },
      templateUrl: 'wrapper.html'
    });

}(angular));
