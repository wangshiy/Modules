(function (angular) {
  'use strict';

  angular.module('phonecatServices', ['ngResource'])

    .factory('Phone', ($resource) => {
      return $resource('/phone-data/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: { phoneId: 'phones' },
          isArray: true
        }
      });
    });

}(angular));
