(function (angular) {
  'use strict';

  angular.module('exampleApp', ['addressBook'])

    .component('exampleApp', {
      templateUrl: 'components/exampleApp/exampleApp.html',
      controller: ExampleAppController,
      controllerAs: 'eac',
    });

  function ExampleAppController() {
    const eac = this;

    eac.purpose = 'billing';
    eac.resetPurpose = function () {
      eac.purpose = 'Testing';
    };
  }

}(angular));
