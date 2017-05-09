(function (angular) {
  'use strict';

  angular.module('app', [])
    .controller('OuterController', OuterController)
    .directive('capitalDisplay', () => {
      return {
        restrict: 'E',
        template: '<h2>The capital of {{cap.countryName}} is {{cap.capName}}</h2>',
        scope: {
          capName: '@capital',
          countryName: '@countryName'
        },
        controller: CapitalController,
        controllerAs: 'cap',
        bindToController: true
      };
    })
    .directive('myCountry', () => {
      return {
        restrict: 'E',
        templateUrl: 'country-template.html',
        scope: {
          c: '=country'
        },
        controller: function () { },
        controllerAs: 'ctry',
        bindToController: true
      };
    });

  // ok to have empty controllers
  function CapitalController() { }

  function OuterController() {
    this.canada = {
      'countryCode': 'CA',
      'countryName': 'Canada',
      'population': 33679000,
      'capital': 'Ottawa',
      'areaInSqKm': 9984670,
    };

    this.usa = {
      'countryCode': 'US',
      'countryName': 'United States',
      'population': 310232863,
      'capital': 'Washington',
      'areaInSqKm': 9629091,
    };
  }

}(angular));
