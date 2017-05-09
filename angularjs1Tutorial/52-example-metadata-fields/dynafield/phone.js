(function (angular) {
  'use strict';

  angular.module('dynafield.phone', [])

    .directive('dynafieldPhone', (fieldDictionary) => {
      return {
        restrict: 'E',
        templateUrl: 'dynafield/phone.html',
        link: phoneLink
      };

      function phoneLink(scope, element, attrs) {
      }
    });

}(angular));
