(function (angular) {
  'use strict';

  const url = 'https://api.zippopotam.us/us/';

  angular.module('formExample', [])

    .directive('cvaExample', () => {
      return {
        restrict: 'E',
        templateUrl: 'cva-example.html',
        controller: CvaExampleController,
        controllerAs: 'cva'
      };
    })

    .directive('westernZip', ($q, $timeout, $http) => {
      return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
          ctrl.$asyncValidators.westernZip = function (modelValue, viewValue) {
            if (ctrl.$isEmpty(modelValue) || modelValue.length !== 5) {
              return $q.reject('not valid zip'); // Empty == not valid
            } else {
              return $timeout(() => { }, 3000)
                .then(() => { return $http.get(url + modelValue); })
                .then((response) => {
                  const longitude = response.data.places[0].longitude;
                  if (longitude > -90) {
                    return $q.reject();
                  }
                  //   return $q.resolve();
                  // more idiomatic to return nothing here
                });
            }
          };
        }
      };
    });

  function CvaExampleController() {
  }

}(angular));
