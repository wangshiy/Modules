(function (angular) {
  'use strict';

  // A custom validator looks like any other directive,
  // other than requiring ngModel.

  angular.module('formExample', [])

    .directive('cvExample', () => {
      return {
        restrict: 'E',
        templateUrl: 'cv-example.html',
        controller: CvExampleController,
        controllerAs: 'cve'
      };
    })

    .directive('mustBeEven', () => {
      return {
        // We explain and show 'require' in depth in a later step
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, elm, attrs, modelController) {
          modelController.$validators.even = function (modelValue, viewValue) {
            return modelController.$isEmpty(modelValue) ||
              parseInt(modelValue) % 2 === 0;
          };
        }
      };
    });

  function CvExampleController() {

  }

}(angular));
