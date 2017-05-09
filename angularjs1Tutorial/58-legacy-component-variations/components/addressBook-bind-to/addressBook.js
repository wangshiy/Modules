(function (angular) {
  'use strict';

  angular.module('addressBook', ['addressEntry'])
    .directive('addressBook', () => {
      return {  // DDO
        restrict: 'E',
        templateUrl: 'components/addressBook-bind-to/addressBook.html',
        controller: AddressBookController,
        controllerAs: 'bc',
        scope: {  // "Isolate Scope"
          purpose: '@purpose'
        },
        bindToController: true
      };
    });

  function AddressBookController($http) {
    const self = this;
    $http.get('data.json').then((response) => {
      self.addresses = response.data;
    });
    self.add = function add() {
      self.addresses.push({
        heading: 'New'
      });
    };

      // This does not work, because binding happens after the controller.
    self.purpose = self.purpose + ' and more';
  };

}(angular));
