(function (angular) {
  'use strict';

  // This controller will be inaccessible

  angular.module('person', [])
    .component('personComponent', {
      templateUrl: 'person-component.html',
      controller: function () {
        this.name = 'Jim';
        this.deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      }
    });

}(angular));
