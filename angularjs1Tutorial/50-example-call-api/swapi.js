(function (angular) {
  'use strict';

  angular.module('swapiApp', [])

    // This is necessary to avoid a problem with E2E testing,
    // irreletant to normal use.
    .config(function ($qProvider) {
      $qProvider.errorOnUnhandledRejections(false);
    })

    .controller('SwapiExampleController', function (swapi) {
      const vm = this;

      swapi.listPeople()
        .then(data => vm.people = data)
        .catch(err => console.log('err:', err));
    })

    .factory('swapi', ($http, $q, $timeout, $log) => {
      function extractData(v) {
        return v.data;
      }
      function extractFilmTitle(response) {
        return response.data.title;
      }

      function augmentWithFilmNames(personResponse) {
        const results = personResponse.results;
        const cache = {}; // URL -> promise of the title

        angular.forEach(results, (person) => {
          person.filmNames = [];
          angular.forEach(person.films, (filmUrl) => {
            if (!cache[filmUrl]) {
              cache[filmUrl] = $http.get(filmUrl).then(extractFilmTitle);
            }
            cache[filmUrl].then((title) => {
              $log.info('answer for', title);
              person.filmNames.push(title);
            });
          });
        });

        return $q((resolve, reject) => {
          const all = $q.all(cache);
          all.then(() => { resolve(personResponse); }, reject);
          // Wait at most 4 seconds:
          $timeout(() => { reject('API Timeout'); }, 4000);
        });
      }

      return {
        listPeople: function () {
          return $http.get('http://swapi.co/api/people/')
            .then(extractData)
            .then(augmentWithFilmNames);
        },
        listStarships: function () {
          return $http.get('http://swapi.co/api/starships/');
        }
      };
    })

    .service('zips', function ($http) {
      const svc = this;

      svc.lookup = function (zipcode) {
        return $http.get('http://api.zippopotam.us/us/' + zipcode);
      };
    })

    .controller('ZipExampleController', function (zips) {
      const vm = this;

      vm.getPlaceDetails = function () {
        zips.lookup(vm.zipcode).then((data) => {
          vm.locationDetails = data;
        });
      };
    });

}(angular));
