(function (angular) {
  'use strict';

  angular.module('dynafield.select', [])

    .directive('dynafieldSelect', () => {
      return {
        restrict: 'E',
        templateUrl: 'dynafield/select.html',
        link: selectLink
      };

      function selectLink(scope, element, attrs) {

      }
    });

}(angular));
