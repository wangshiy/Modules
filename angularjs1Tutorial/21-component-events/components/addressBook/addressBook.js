(function (angular) {
  'use strict';

  angular.module('addressBook', ['addressEntry'])
    .service('addressService', AddressService)
    .component('addressBook', {
      templateUrl: 'components/addressBook/addressBook.html',
      controller: AddressBookController,
      controllerAs: 'bc',
      bindings: {
        purpose: '@purpose',
        updatePurpose: '&'
      }
    });

  function AddressBookController(addressService) {
    const abc = this;

    addressService.addressPromise.then((data) => {
      abc.addresses = data;
    });

    abc.addNew = function addNew() {
      abc.addresses.push({
        heading: 'New'
      });
    };

    abc.addExisting = function addExisting(a) {
      abc.addresses.push(a);
    };

    abc.update = function () {
      abc.updatePurpose();
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
