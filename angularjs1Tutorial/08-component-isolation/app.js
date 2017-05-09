(function (angular) {
  'use strict';

  angular.module('app', [])
    .component('outerComponent', {
      templateUrl: 'outer-component.html',
      controller: OuterController
    })
    .component('countryThing', {
      templateUrl: 'country-thing.html'
    });

  function OuterController() {
    this.countries = [
      {
        'countryCode': 'US',
        'countryName': 'United States',
        'population': 310232863,
        'capital': 'Washington',
        'areaInSqKm': 9629091,
      }, {
        'countryCode': 'CA',
        'countryName': 'Canada',
        'population': 33679000,
        'capital': 'Ottawa',
        'areaInSqKm': 9984670,
      }
    ];
  }
}(angular));
