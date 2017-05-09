(function (angular) {
  'use strict';

  function ListenerController($scope) {
    const lc = this;
    $scope.$on('nameChange', (event, newName) => {
      // This can cause trouble in some IEs
      console.log(event);
      lc.childName = newName;
    });
  }

  function EmitController($scope) {
    const ec = this;
    ec.name = 'John';
    ec.changeName = function () {
      $scope.$emit('nameChange', ec.name);
    };
  }

  angular.module('exampleApp', [])
    .controller('ListenerController', ListenerController)
    .controller('EmitController', EmitController);

}(angular));
