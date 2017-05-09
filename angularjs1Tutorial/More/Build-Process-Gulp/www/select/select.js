; (function (angular) {
  'use strict';

  angular.module('select', ['select.characterNameForm', 'select.facetedSearch'])
    .controller('SelectController', SelectController);

  function SelectController($http, $location, archetypeListResolution, imageMapResolution) {
    const slc = this;
    slc.sortBy = 'name';
    slc.choose = choose;
    slc.formValid = false;
    slc.characterName = '';
    slc.characters = archetypeListResolution;
    slc.imageMap = imageMapResolution;
    slc.characterSearch = {
      'name': '',
      'gender': '',
      'race': '',
      'statPref': ''
    };

    function choose(id) {
      $location.url('/configure/' + id + '/' + slc.characterName);
    }
  }
}(angular));
