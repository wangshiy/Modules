; (function (angular) {
  'use strict';

  angular.module('swapp', ['ngRoute',
    'select',
    'configure',
    'summary',
    'common',
    'swapi'
  ])
    .run(function ($route, $rootScope) {
      // $rootScope.$on('$routeChangeSuccess', function () {
      //   document.title = $route.current.title;
      // });
      $rootScope.title = function () {
        return $route && $route.current ? $route.current.title : '';
      };
    })
    .config(function ($routeProvider) {
      $routeProvider.when('/', {
        title: 'Welcome',
        templateUrl: 'welcome/welcome.html'
      })
        .when('/select', {
          title: 'Select',
          templateUrl: 'select/select.html',
          controller: 'SelectController as slc',
          resolve: {
            archetypeListResolution: function (swapi) {
              return swapi.getPeople();
            },
            imageMapResolution: function (swapi) {
              return swapi.getImageMap();
            }
          }
        }).when('/configure/:id/:avatarName', {
          title: 'Configure',
          templateUrl: 'configure/configure.html',
          controller: 'ConfigureController as cc',
          resolve: {
            archetypeDetailsResolution: function ($route, swapi) {
              return swapi.getPerson($route.current.params.id);
            }
          }
        }).when('/summary', {
          title: 'Summary',
          templateUrl: 'summary/summary.html',
          controller: 'SummaryController as sc'
        }).otherwise({
          redirectTo: '/'
        });
    });
}(angular));
