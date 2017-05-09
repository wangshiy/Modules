(function (angular) {
  'use strict';

  angular.module('myApp', [])
    .directive('cardBlock', cardBlock);

  function cardBlock(/* could do DI */) {
    return {
      restrict: 'E',  // Attribute, Element, Class
      templateUrl: 'card.html'
    };
  };

}(angular));
