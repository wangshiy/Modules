(function (angular) {
  'use strict';

  angular.module('simpleApplication', ['ngRoute'])
    .config(
      $routeProvider => {
        $routeProvider
          .when('/welcome', {
            //routes define one "implicit component" per page
            templateUrl: 'welcome.html',
          })
          .when('/countries', {
            templateUrl: 'country-list.html',
            controller: 'CountryListController',
            controllerAs: 'cl'
          })
          .when('/country/:countryCode', {
            templateUrl: 'country-detail.html',
            controller: 'CountryDetailController',
            controllerAs: 'cd'
          })
          .otherwise({
            redirectTo: '/welcome'
          });
      })
    .controller('CountryListController', CountryListController)
    .controller('CountryDetailController', CountryDetailController);

  function CountryListController($http) {
    const clc = this;
    $http.get('../demo-data/countries.json').then((response) => {
      clc.countries = response.data;
    });

    clc.orderProp = 'countryName';
  }

  function CountryDetailController($routeParams) {
    this.countryCode = $routeParams.countryCode;
  }

  // Angular does not care how modules are grouped in files.
  // a ___Controllers module makes little sense in real applications.

}(angular));
