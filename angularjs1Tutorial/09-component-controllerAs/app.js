(function(angular) {
  'use strict';

  function CountryAppController() {
    this.countries = [{
      'countryCode': 'US',
      'countryName': 'United States',
      'population': 310232863,
      'capital': 'Washington',
      'areaInSqKm': 9629091
    }, {
      'countryCode': 'CA',
      'countryName': 'Canada',
      'population': 33679000,
      'capital': 'Ottawa',
      'areaInSqKm': 9984670
    }];
  }

  angular.module('app', [])
    .component('countryApp', {
      templateUrl: 'country-app.html',
      controller: CountryAppController,
      controllerAs: 'cac'
    });
}(angular));
