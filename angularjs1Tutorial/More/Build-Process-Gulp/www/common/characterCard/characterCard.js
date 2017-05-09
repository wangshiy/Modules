; (function (angular) {
  angular.module('common.characterCard', [])
    .directive('characterCard', characterCardDirective);

  function characterCardDirective() {
    return {
      templateUrl: 'common/characterCard/characterCard.html',
      scope: {
        character: '='
      }
    };
  }
}(angular));
