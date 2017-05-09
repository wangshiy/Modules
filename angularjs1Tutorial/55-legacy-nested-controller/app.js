(function (angular) {
  'use strict';

  function YellowController($scope) {
    $scope.values = {
      a: 3,
      b: 5
    };
    $scope.add = function add() {
      const a = parseInt($scope.values.a);
      const b = parseInt($scope.values.b);
      $scope.total = a + b;
    };
  }

  function OuterController($scope) {
    function Name() {
      this.first = 'John';
    }
    $scope.name = new Name(); // model ON the scope
  }

  function InnerController($scope) {
    // $scope.name = { first: "JIm" }; // model ON the scope
  }

  angular.module('demoApp', [])
    .controller('YellowController', YellowController)
    .controller('OuterController', OuterController)
    .controller('InnerController', InnerController);

}(angular));
