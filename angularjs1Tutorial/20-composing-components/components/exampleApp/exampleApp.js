(function (angular) {
  'use strict';

  angular.module('exampleApp', ['addressBook', 'messageBox'])

    .component('exampleApp', {
      templateUrl: 'components/exampleApp/exampleApp.html'
    });

}(angular));
