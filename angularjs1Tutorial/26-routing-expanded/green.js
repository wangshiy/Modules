(function (angular) {
  'use strict';

  function GreenController() {
    this.message = 'Hello Green World!';
  }

  angular.module('green', ['ngRoute'])
    .config($routeProvider => {
      $routeProvider.when('/green', {
        template: '<green></green>',
        myCustomName: 'Green'
      });
    })
    .component('green', {
      templateUrl: 'green.html',
      controller: GreenController,
      controllerAs: 'gc',
    });

}(angular));
