(function (angular) {
  'use strict';

  angular.module('messageBox', [])

    .component('messageBox', {
      templateUrl: 'components/messageBox/messageBox.html',
      bindings: {
        'message': '@msg'
      },
      controllerAs: 'mbc'
    });

}(angular));
