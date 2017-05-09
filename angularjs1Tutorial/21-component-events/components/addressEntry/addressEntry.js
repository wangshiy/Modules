(function (angular) {
  'use strict';

  function AddressEntryController() {
    const aec = this;

    aec.dup = function () {
      // Surprising API in use here:
      aec.duplicate({
        newAddress: angular.copy(aec.address),
        somethingSuperfluous: 'Doesn\'t matter'
      });
    };
  }

  angular.module('addressEntry', [])
    .component('addressEntry', {
      templateUrl: 'components/addressEntry/addressEntry.html',
      bindings: {
        label: '@',
        address: '=addr',
        duplicate: '&'
      },
      controller: AddressEntryController,
      controllerAs: 'ae'
    });

}(angular));
