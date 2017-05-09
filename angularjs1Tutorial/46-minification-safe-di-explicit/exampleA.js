(function(angular) {
  'use strict';

  angular.module('exampleA', [])
    .controller('AController', ['$log', '$timeout', '$interval', '$location',
      function ($log, $timeout, $interval, $location) {
        const ac = this;
        function writeToLog() {
          $log.info('Hello from A');
        }

        ac.counter = 1;
        ac.url = 'A: ' + $location.absUrl();

        function incCounter() {
          ac.counter++;
        }

        $timeout(writeToLog, 1000);
        $interval(incCounter, 400);
      }
    ]);

}(angular));
