(function (angular) {
  'use strict';

  angular.module('myApp', [])
    .directive('cardBlock', cardBlock)
    .directive('wrapper', wrapper);

  function cardBlock(/* could do DI */) {
    return {
      restrict: 'E',  // Attribute, Element, Class
      templateUrl: 'card.html'
    };
  }

  function wrapper() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'wrapper.html'
    };
  }

}(angular));
