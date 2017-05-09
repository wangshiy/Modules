(function (angular) {
  'use strict';

  angular.module('exampleApp', ['ngMessages'])
    .component('inputForm', {
      templateUrl: 'input-form.html',
      controller: FormController,
      controllerAs: 'fc'
    });

  function FormController() {
    const vm = this;

    vm.submit = function (form) {
      // if (form.$valid) {
      //   myName.first = vm.name.first;
      //   myName.last = vm.name.last;
      //   form.$setPristine;
      // }
    };
  }

}(angular));
