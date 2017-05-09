(function (angular) {
  'use strict';

  angular.module('app1', [])
    .component('performanceExample', {
      templateUrl: 'bindings.html',
      controller: MyController,
      controllerAs: 'mc'
    });

  function MyController() {
    this.address = 'Main St.';

    this.ngIf = true;
    this.ngShow = true;

    this.boxes = [];
    for (let j = 0; j < 100; j++) {
      this.boxes.push({ n: j });
    }
  }

}(angular));
