(function(angular) {
  'use strict';

  CController.$inject = ['$log', '$timeout', '$interval', '$location'];
  function CController($log, $timeout, $interval, $location) {
    const cc = this;

    function writeToLog() {
      $log.info('Hello from C');
    }

    cc.counter = 100;
    cc.url = 'C: ' + $location.absUrl();

    function incCounter() {
      cc.counter++;
    }

    $timeout(writeToLog, 1000);
    $interval(incCounter, 400);
  }

  angular.module('exampleC', [])
    .controller('CController', CController);

}(angular));
