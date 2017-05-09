(function (angular) {
  'use strict';

  angular.module('app', [])
    .component('capitalApp', {
      templateUrl: 'capital-app.html',
      controller:  OuterController
    })
    .component('capitalDisplay', {
      template: '<h2>The capital of {{$ctrl.countryName}} is {{$ctrl.capName}}</h2>',
      bindings: {
        capName: '@capital',
        countryName: '@countryName'
      }
    })
    .component('myCountry', {
      templateUrl: 'country-template.html',
      bindings: {
        country: '=country'
      },
      controllerAs: 'cc'
    });

  function OuterController() {
    this.canada = {
      'countryCode': 'CA',
      'countryName': 'Canada',
      'population': 33679000,
      'capital': 'Ottawa',
      'areaInSqKm': 9984670
    };

    this.usa = {
      'countryCode': 'US',
      'countryName': 'United States',
      'population': 310232863,
      'capital': 'Washington',
      'areaInSqKm': 9629091
    };
  }
}(angular));
