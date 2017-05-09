;(function () {
  'use strict';

  function ModelOptionsController() {
    let val = '';
    this.getSet = function (newVal) {
      return arguments.length ? (val = newVal) : val;
    };
  }

  angular.module('app', [])
    .component('demoApp', {
      templateUrl: 'demo.html',
      controller: ModelOptionsController,
      controllerAs: 'moc'
    });
}());
