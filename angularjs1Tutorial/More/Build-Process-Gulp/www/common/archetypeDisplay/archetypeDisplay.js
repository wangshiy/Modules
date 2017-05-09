; (function (angular) {
  angular.module('common.archetypeDisplay', [])
    .directive('archetypeDisplay', archetypeDirective);

  function archetypeDirective() {
    return {
      templateUrl: 'common/archetypeDisplay/archetypeDisplay.html',
      scope: {
        archetype: '=',
        enabled: '=',
        action: '&'
      }
    };
  }
}(angular));
