(function (angular) {
  'use strict';

  angular.module('exampleApp', ['drag'])
    .directive('bounce', ($interval) => {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          let n = 0;
          const intervalId = $interval(() => {
            n += 0.1;
            element.css({
              'transform': 'rotate(' + Math.sin(n) * 5 + 'deg)' //
            });
          }, 25);

          element.on('$destroy', () => {
            $interval.cancel(intervalId);
          });
        }
      };
    })
    .directive('blink', ($interval) => {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          let on = true;
          const intervalId = $interval(() => {
            console.log('interval tick');
            on = !on;
            element.css({
              display: on ? 'inline-block' : 'none'
            });
          }, 500);

          element.on('$destroy', () => {
            console.log('Destroying interval');
            $interval.cancel(intervalId);
          });
        }
      };
    });

}(angular));
