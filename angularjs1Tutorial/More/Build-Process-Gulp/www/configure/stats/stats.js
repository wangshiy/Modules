; (function (angular) {
  angular.module('configure.stats', [])
    .directive('statsForm', statsFormDirective);

  function statsFormDirective() {
    return {
      templateUrl: 'configure/stats/stats.html',
      scope: {
        stats: '='
      },
      link: function (scope) {
        scope.calculatedStats = function () {
          scope.stats.pointsUsed = Math.pow(parseInt(scope.stats.additionalStrength), 2) +
            Math.pow(parseInt(scope.stats.additionalDexterity), 2);
          scope.stats.pointsLeft = scope.stats.totalPoints - scope.stats.pointsUsed;
          return scope.stats;
        };
        // The following is functionally the same as above
        // scope.$watchCollection('stats', function (stats) {
        //   stats.pointsUsed = Math.pow(parseInt(stats.additionalStrength), 2) + Math.pow(parseInt(stats.additionalDexterity), 2);
        //   stats.pointsLeft = stats.totalPoints - stats.pointsUsed;
        //   scope.stats = stats;
        // });
      }
    };
  }
}(angular));
