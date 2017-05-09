(function (angular) {
  'use strict';

  function NaiveCountryController($http) {
    const ncc = this;
    // Talking to the backend from UI code - bad!
    $http.get('../demo-data/countries.json')
      .then(response => ncc.countries = response.data);

    // Cancels request if longer that 5 seconds
    // $http.get('../demo-data/countries.json', { timeout: $timeout(function (req) { }, 5000) });
  }

  function BetterCountryController(countryService) {
    const bcc = this;
    countryService.getList()
      .then(response => bcc.countries = response.data);
  }

  // Most Angular experts recommend calling $http from service layer;
  // Service functions which return asynchronously, return a promise.
  function CountryService($http) {
    this.getList = () => $http.get('../demo-data/countries.json');
  }

  angular.module('app', [])
    .component('countryList', {
      templateUrl: 'countries.html',
      controller: NaiveCountryController
      // controller: BetterCountryController
    })
    .service('countryService', CountryService); // Note the case for each

}(angular));
