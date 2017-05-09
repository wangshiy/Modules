(function(angular) {
  'use strict';

  function BController($log, $timeout, $interval, $location) {
    const bc = this;
    function writeToLog() {
      $log.info('Hello From B');
    }

    bc.counter = 10;
    bc.url = 'B: ' + $location.absUrl();

    function incCounter() {
      bc.counter++;
    }

    $timeout(writeToLog, 1000);
    $interval(incCounter, 400);
  }

  angular.module('exampleB', [])
    .controller('BController', ['$log', '$timeout', '$interval', '$location', BController]);

}(angular));
