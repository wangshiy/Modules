(function (angular) {
  'use strict';

  angular.module('simpleApplication', ['ngRoute'])
    .config(($routeProvider, $locationProvider) => {
      // $locationProvider.html5Mode(true);
      $routeProvider
        .when('/welcome', {
          template: '<welcome></welcome>',
        })
        .when('/countries', {
          template: '<country-list></country-list>'
        })
        .when('/country/:countryCode', {
          template: '<country-detail></country-detail>'
        })
        .otherwise({
          redirectTo: '/welcome'
        });
    })
    .component('app', {
      templateUrl: 'app.html'
    })
    .component('welcome', {
      templateUrl: 'welcome.html'
    })
    .component('countryList', {
      templateUrl: 'country-list.html',
      controller: CountryListController,
      controllerAs: 'cl',
    })
    .component('countryDetail', {
      templateUrl: 'country-detail.html',
      controller: CountryDetailController,
      controllerAs: 'cd',
    });

  function CountryListController($http) {
    const clc = this;
    $http.get('../demo-data/countries.json').then(
      response => clc.countries = response.data);

    clc.orderProp = 'countryName';
  }

  function CountryDetailController($routeParams) {
    this.countryCode = $routeParams.countryCode;
  }

}(angular));
