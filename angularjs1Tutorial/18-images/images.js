(function (angular) {
  'use strict';

  function CountryController($http) {
    const that = this;
    // Experts recommend not talking to a backend
    // directly from a controller.
    $http.get('../demo-data/countries.json')
      .then(response => that.countries = response.data);
  }

  angular.module('app1', [])
    .component('countryList', {
      templateUrl: 'country-list.html',
      controller: CountryController
    });
}(angular));
