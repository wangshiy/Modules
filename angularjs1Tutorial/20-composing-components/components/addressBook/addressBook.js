(function (angular) {
  'use strict';

  angular.module('addressBook', ['addressEntry', 'expando'])
    .service('addressService', AddressService)
    .component('addressBook', {
      templateUrl: 'components/addressBook/addressBook.html',
      controller: AddressBookController,
      controllerAs: 'bc',
      bindings: {
        purpose: '@purpose'
      }
    });

  function AddressBookController(addressService) {
    const abc = this;

    addressService.addressPromise
      .then(data => abc.addresses = data);

    abc.add = function add() {
      abc.addresses.push({
        heading: 'New'
      });
    };

    // This does not work, because binding happens after the controller.
    abc.purpose = abc.purpose + ' and more';
  };

  function AddressService($http) {
    const as = this;

    as.addressPromise = $http.get('data.json')
      .then(response => response.data);
  }

}(angular));
