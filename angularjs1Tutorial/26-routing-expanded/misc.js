(function (angular) {
  'use strict';

  // Add more to the same module; this has nothing to do with routing,
  // it merely shows another variation of how the module system can be used.

  angular.module('BootcampApp')
    .component('blue', {
      templateUrl: 'blue.html',
      controller: BlueController,
      controllerAs: 'bc'
    })
    .component('red', {
      templateUrl: 'red.html',
      controller: RedController,
      controllerAs: 'rc'
    });

  function BlueController() {
    this.message = 'Hello Blue World!';
  }

  function RedController() {
    this.message = 'Hello Red World!';
  }


}(angular));
