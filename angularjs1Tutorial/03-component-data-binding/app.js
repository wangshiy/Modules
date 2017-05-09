(function (angular) {
  'use strict';

  // IIFE = Immediately Invoked Function Expression
  // * Inform some IDEs that global access is intentional.
  // * Document use of globals.
  // * Protect from accidental overwrite.
  // * Rename locally ('ng')
  // * Robust access to the real Undefined.

  angular.module('someApp', [])
    .component('someComponent', {
      templateUrl: 'someComponent.html',
      controller: function SomeController() {
        this.name = 'Jim';
      }
    })
    .component('anotherComponent', {
      templateUrl: 'anotherComponent.html',
      controller: AnotherController
    });

  // Note the function is named twice.
  function AnotherController() {
    this.company = 'ABC';
  }

}(angular));
