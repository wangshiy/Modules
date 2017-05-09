(function (angular) {
  'use strict';

  angular.module('expando', [])

    .component('expando', {
      templateUrl: 'components/expando/expando.html',
      transclude: true,
      bindings: {
        heading: '@'
      },
      controllerAs: 'ec'
    });

}(angular));
