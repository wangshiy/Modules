; (function (angular, _, localStorage) {
  'use strict';

  angular.module('configure', ['configure.stats'])
    .controller('ConfigureController', ConfigureController)
    .filter('StringCentimetersToNumberFeet', StringCentimetersToNumberFeet);

  function ConfigureController($scope, $location, $routeParams, archetypeDetailsResolution) {
    const cc = this,
      archetype = archetypeDetailsResolution,
      character = _.clone(archetype);

    cc.avatarName = $routeParams.avatarName;
    cc.goToSummary = goToSummary;
    cc.characterDetails = buildCharacter;
    cc.films = [];
    cc.userStats = {
      additionalStrength: 0,
      additionalDexterity: 0,
      totalPoints: 100
    };

    function goToSummary() {
      localStorage.setItem('characterObject', JSON.stringify(cc.characterDetails()));
      $location.url('/summary');
    }

    function buildCharacter() {
      character.avatarName = cc.avatarName;
      character.strength = archetype.baseStr + parseInt(cc.userStats.additionalStrength);
      character.dexterity = archetype.baseDex + parseInt(cc.userStats.additionalDexterity);
      return character;
    }
  }

  function StringCentimetersToNumberFeet() {
    return function (str) {
      if (parseFloat(str)) {
        return parseFloat(str) / 32;
      } else {
        return str;
      }
    };
  }
}(angular, window._, window.localStorage));
