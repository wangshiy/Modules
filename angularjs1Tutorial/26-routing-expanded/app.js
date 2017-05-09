(function (angular) {
  'use strict';

  angular.module('BootcampApp', ['ngRoute', 'yellow', 'green'])
    .config($routeProvider => {
      $routeProvider
        .when('/blue', {
          template: '<blue></blue>',
          myCustomName: 'Blue 1'
        })
        .when('/bLUe', {
          template: '<h1>I\'m bLUe</h1>',
          myCustomName: 'Blue 2'
        })
        .when('/red', {
          template: '<red></red>',
          caseInsensitiveMatch: true,
          myCustomName: 'Red'
        })
        .otherwise({
          redirectTo: '/blue'
        });

      // Can also be set globally:
      // $routeProvider.caseInsensitiveMatch = true;

      // We will see "resolve" and route events later
    })
    .component('customHeader', {
      controller: function ($route) {
        this.getTitle = function () {
          return $route.current && $route.current.myCustomName;
        };
      },
      controllerAs: 'ch',
      templateUrl: 'header.html'
    });
}(angular));
