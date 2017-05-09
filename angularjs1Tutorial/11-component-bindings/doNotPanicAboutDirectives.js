angular.module('exampleApp', [])
  .component('myCountry', {
    templateUrl: 'country-template.html',
    bindings: {
      country: '=country'
    },
    controllerAs: 'cc'
  })
  .directive('myCountry', () => {
    return {
      restrict: 'E',
      templateUrl: 'country-template.html',
      bindToController: true,
      scope: {
        country: '=country'
      },
      controller: myCountryController,
      controllerAs: 'cc'
    };
  });

//need empty controller to support directive
function myCountryController() {

}
