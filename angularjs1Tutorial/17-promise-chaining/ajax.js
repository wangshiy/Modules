(function ajax(angular) {
  'use strict';

  function CountryController(countryService) {
    const cc = this;
    countryService.getList()
      .then(list => cc.countries = list);

    countryService.getListLength()
      .then(len => cc.listLength = len);
  }

  function CountryService($http) {
    const url = '../demo-data/countries.json';
    const countryService = this;
    const defaultData = [{
      'countryName': 'Andorra',
      'population': 84000,
    }];

    function log(param) {
      console.log(param);
      return param;
    }

    countryService.getList = function () {
      // Eventually resolves with the response
      const httpPromise = $http.get(url);

      // Eventually resolves with the data extracted from the previous result
      const dataPromise = httpPromise
        .then(response => response.data);

      return dataPromise;
    };

    countryService.getList2 = function () {
      // This is how we would write getList()
      return $http.get(url).then(
        response => response.data);
    };

    countryService.getList3 = function () {
      return $http.get(url)
        .catch(err => {
          console.error('Got an error, using default data', err);
          return {
            data: defaultData
          };
        })
        // Note that we are back on the success path, we have caught the error
        .then(response => response.data);
    };

    countryService.getList4 = function () {
      return $http.get(url)
        .then(response => response.data,
        err => {
          console.error('Got an error, using default data', err);
          return defaultData;
        });
    };

    countryService.getListLength = function () {
      const x = $http.get(url)
        .then(log)
        // The promise here wraps the return value of the callback and
        // sends it to the next then function
        .then(response => response.data)
        .then(log)
        .then(list => list.length)
        .then(log);
      console.log('Done setting up chain');
      return x;
    };

    // Who wants to dive into ES6?
    countryService.getListLength2 = () =>
      $http.get(url)
        .then(response => response.data)
        .then(list => list.length);
  }

  angular.module('app', [])
    .component('countryList', {
      templateUrl: 'countries.html',
      controller: CountryController
    })
    .service('countryService', CountryService);
}(angular));
