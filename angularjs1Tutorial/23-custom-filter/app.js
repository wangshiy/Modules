(function (angular) {
  'use strict';

  angular.module('app1', ['someFilters'])
    .component('countryView', {
      templateUrl: 'country-detail.html',
      controller: CountryDetailController,
      controllerAs: 'cd'
    });

  function CountryDetailController($http) {
    const vm = this;
    $http.get('../demo-data/usa.json')
      .then(response => vm.country = response.data);
  }

}(angular));
