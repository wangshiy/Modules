; (function (angular) {
  angular.module('select.characterNameForm', ['ngMessages'])
    .directive('characterNameForm', characterNameForm);

  function characterNameForm() {
    return {
      templateUrl: 'select/characterNameForm/characterNameForm.html',
      scope: {
        status: '=',
        name: '='
      },
      link: function (scope) {
        scope.$watch('characterForm.$valid', function (n) {
          scope.status = n;
        });
      }
    };
  }
}(angular));
