(function (angular) {
  'use strict';

  function FirstController() {
    this.name = 'Barry';
  }

  function SecondController() {
    const sc = this;
    sc.name = 'Harold';
  }

  angular.module('sandbox', [])
    .controller('FirstController', FirstController);

}(angular));
