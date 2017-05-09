(function (angular) {
  'use strict';

  angular.module('addressEntry', [])
    .directive('addressEntry', () => {

      return { // DDO = Directive Definition Object
        restrict: 'E', // Recommended for component directives.
        templateUrl: 'components/addressEntry/addressEntry.html',
        scope: {
          label: '@',
          address: '=addr'
        }
      };
    });

}(angular));
