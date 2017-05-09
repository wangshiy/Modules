(function (angular, _) {
  angular.module('swapi', [])
  .factory('swapi-dont-use', swapiFactory)
  .service('swapi', swapiService);

  function swapiFactory($http) {
    return {
      getPeople: function () {
        return $http.get('http://swapi.co/api/people/').then(function (response) {
          return response.data.results;
        });
      },
      getImageMap: function () {
        return $http.get('data/imageMap.json').then(unwrapData);
      },
      getPerson: function (id) {
        return $http.get('http://swapi.co/api/people/' + id + '/')
          .then(unwrapData);
      }
    };
  }

  function swapiService($http, $q) {
    const swapi = this;
    swapi.getPeople = function () {
      return $http.get('http://swapi.co/api/people/')
        .then(function (response) { return response.data.results; })
        .then(addSwappData);
    };

    swapi.getImageMap = function () {
      return $http.get('data/imageMap.json').then(unwrapData);
    };

    swapi.getPerson = function (id) {
      return $http.get('http://swapi.co/api/people/' + id + '/')
        .then(unwrapData)
        .then(processFilmList)
        .then(addImageUrl)
        .then(addBaseStats)
        .then(modifyGender);
    };

    function processFilmList(character) {
      const filmPromises = [];
      _.forEach(character.films, function (filmUrl) {
        // In a truly restfull API, sometimes you can just use $http,
        // because the API has provided all that you need to know
        filmPromises.push($http.get(filmUrl).then(function (response) {
          return response.data.title;
        }));
      });
      return $q.all(filmPromises).then(function (films) {
        character.filmNames = films;
        return character;
      });
    }

    function addImageUrl(character) {
      return swapi.getImageMap().then(function (map) {
        character.imageUrl = map[character.name];
        return character;
      });
    }

    function addSwappData(characters) {
      _.forEach(characters, addBaseStats);
      _.forEach(characters, addRace);
      _.forEach(characters, modifyGender);
      _.forEach(characters, addCharacterId);
      //following $resource pattern
      _.forEach(characters, addImageUrl);
      return characters;
    }
  }

  function unwrapData(response) {
    return response.data;
  }

  function addCharacterId(character) {
    const urlSegments = character.url.split('/');
    character.id = urlSegments[urlSegments.length - 2];
    return character;
  }

  //quick and dirty fix to avoid partial match searches giving inaccurate results
  function modifyGender(character) {
    character.gender = character.gender[0];
    return character;
  }

  function addRace(character) {
    if (character.gender === 'n/a') {
      character.race = 'droid';
    } else {
      character.race = 'human';
    }
    return character;
  }

  function addBaseStats(character) {
    const minStr = 8,
      minDex = 4;

    character.baseStr = Math.round(minStr + (character.mass + character.height) / 15000);
    character.baseDex = Math.round(minDex +
    Math.pow(1550000 / (character.mass + character.height), 0.3));
    if (character.baseStr > character.baseDex) {
      character.statPref = 'str';
    } else {
      character.statPref = 'dex';
    }
    return character;
  }
}(angular, _));
