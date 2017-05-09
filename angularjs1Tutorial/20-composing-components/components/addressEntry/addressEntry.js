(function (angular) {
  'use strict';

  angular.module('addressEntry', [])
    .component('addressEntry', {
      templateUrl: 'components/addressEntry/addressEntry.html',
      bindings: {
        label: '@',
        address: '=addr'
      },
      controllerAs: 'ae'
    });

}(angular));
