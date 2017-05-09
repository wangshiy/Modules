(function (angular) {
  'use strict';

  const x = angular.module('someApp', []);

  // Note the function is named twice.
  x.controller('SomeController', function SomeController() {
    this.name = 'Jim';
  });

  function AnotherController() {
    this.company = 'ABC';
  }

  x.controller('AnotherController', AnotherController);

}(angular));
