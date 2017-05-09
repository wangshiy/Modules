(function (angular) {
  'use strict';

  function DemoController($sce) {
    this.unsafeHtml =
      '<a onmouseover="this.textContent=\'dangerous!\'" href="http://twitter.com">Twitter</a>';
    this.trustedHtml = $sce.trustAsHtml(this.unsafeHtml);
  }

  // We get $sanitize applied to ng-bind-html just by including the ngSanitize module
  angular.module('app', ['ngSanitize'])
    .component('sanitizeDemo', {
      templateUrl: 'sanitize.html',
      controller: DemoController,
      controllerAs: 'dc'
    });

}(angular));
