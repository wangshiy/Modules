(function (angular) {
  'use strict';

  function NavbarController($rootScope) {
    const nbc = this;
    nbc.navigating = false;
    $rootScope.$on('$routeChangeStart',
      () => nbc.navigating = true);
    $rootScope.$on('$routeChangeSuccess',
      () => nbc.navigating = false);
  }

  angular.module('app1')
    .component('navbar', {
      templateUrl: 'navbar.html',
      controller: NavbarController
    });

}(angular));
