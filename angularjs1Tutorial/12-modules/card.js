(function (angular) {
  'use strict';

  angular.module('card', [])
    .component('cardBlock', {
      templateUrl: 'card.html',
      controller: function () {
        this.roll = Math.floor(Math.random() * 10);
      }
    });

}(angular));
