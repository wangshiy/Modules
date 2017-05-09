(function (angular) {
  'use strict';

  angular.module('exampleApp', [])
    .directive('outline', () => {
      return {
        restrict: 'A',
        // element is already wrapped in a jqlite object
        link: function (scope, element, attrs) {
          element.css({
            border: '1px solid green'
          });
        }
      };
    });

}(angular));
