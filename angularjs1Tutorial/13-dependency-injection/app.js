(function (angular) {
  'use strict';

  // Consider the parameter list in the following line
  function InjectionController($timeout, $log, $interval, $location) {
    const ctrl = this;

    function writeToLog() {
      $log.info('Hello World');
    }

    ctrl.counter = 1;
    ctrl.url = $location.absUrl();

    function incCounter() {
      ctrl.counter++;
    }

    $timeout(writeToLog, 1000);
    $interval(incCounter, 400);
  }

  angular.module('app', [])
    .component('injectionExample', {
      templateUrl: 'app.html',
      controller: InjectionController
    });

}(angular));
