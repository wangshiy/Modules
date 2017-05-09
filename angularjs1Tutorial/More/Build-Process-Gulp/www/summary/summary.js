; (function (angular, localStorage) {

  function SummaryController() {
    this.character = JSON.parse(localStorage.getItem('characterObject'));
  }

  angular.module('summary', [])
    .controller('SummaryController', SummaryController);

}(angular, window.localStorage));
