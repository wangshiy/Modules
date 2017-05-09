(function (angular) {
  'use strict';

  angular.module('countries', [])
    .service('countryService', CountryService)
    .component('countryList', {
      templateUrl: 'countries.html',
      controller: CountryController
    });

  function CountryService() {
    this.getList = () => ['Russia', 'Canada', 'United States', 'China'];
  }

  function CountryController(countryService) {
    this.list = countryService.getList();
  }

}(angular));
