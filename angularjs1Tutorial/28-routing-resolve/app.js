(function (angular) {
  'use strict';

  angular.module('app1', ['ngRoute'])
    .config($routeProvider => {
      $routeProvider.
        when('/welcome', {
          template: '<welcome></welcome>'
        }).
        when('/country/:id', {
          template: '<country-detail country="$resolve.country"></country-detail>',
          resolve: {
            // This variant requires that the factory *is* a promise:
            // "country": "CountryLoader"
            // More typically a factory has a function which returns a promise;
            // DI is available in a resolve function.
            country: function ($route, countryService) {
              // $routeParams is not updated until the route is resolved;
              // use $route.current.params instead
              return countryService.load($route.current.params.id);
            }
          }
        }).
        otherwise({
          redirectTo: '/welcome'
        });
    })

    .service('countryService', CountryService)

    .factory('promiseSleep', ($timeout) => {
      return function (ms) {
        return function (value) {
          return $timeout(() => {
            return value;
          }, ms);
        };
      };
    })
    .component('welcome', {
      // Note the `` is an ES2015 multiline string (not supported in all browsers)
      template: `
        <div class="center-align">
          <h1>Welcome to the resolve step!!</h1>
        </div>
        `
    })
    .component('countryDetail', {
      templateUrl: 'country-detail.html',
      controllerAs: 'cdc',
      bindings: {
        country: '='
      }
    });

  function CountryService($http, promiseSleep) {
    this.load = function (countryCode) {
      return $http.get('../demo-data/' + countryCode + '.json')
        .then(promiseSleep(1800)) //to make it visibly delay
        .then(response => response.data);
    };
  }

  function CountryLoader($route, countryService) {
    return countryService.load($route.current.params.id);
  };

}(angular));
