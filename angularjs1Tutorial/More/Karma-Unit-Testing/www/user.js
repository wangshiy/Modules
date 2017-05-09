(function(angular) {
  'use strict';

  function UserController() {
    this.user = {
      first_name: 'Barry',
      last_name: 'Allen'
    };

    this.fullName = function fullName(n) {
      return n.first_name + ' ' + n.last_name;
    };
  }

  angular.module('user', [])
    .component('userDisplay', {
      template: '<div>Name: {{ $ctrl.user.fullName() }}</div>',
      controller: UserController
    });

  angular.module('legacy-user', [])
    .controller('UserController', UserController);

}(angular));
