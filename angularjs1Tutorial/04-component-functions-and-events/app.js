(function (angular) {
  'use strict';

  angular.module('app1', [])
    .component('incrementerComponent', {
      templateUrl: 'incrementerComponent.html',
      controller: function IncrementerController() {
        const ic = this; // Other names: that, self, vm

        ic.count = 0;
        ic.increment = () => ic.count++;

        // function helper() {
        //   ic.count++;
        // }

        ic.setText = function (text) {
          // helper();
          console.log('Called?');
          ic.text = text;
        };
      }
    });

}(angular));
