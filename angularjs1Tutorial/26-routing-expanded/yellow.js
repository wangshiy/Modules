(function (angular) {

  function myFunction(params) {
    return (parseInt(params.id) < 100) ? '<yellow-one></yellow-one>' : '<yellow-two></yellow-two>';
  }

  angular.module('yellow', ['ngRoute'])
    .config($routeProvider => {
      $routeProvider
        .when('/yellow/:id', {
          template: myFunction,  //called with route parameters
          myCustomName: 'Yellow'
        });
    })
    .component('yellowOne', {
      template: '<h2 style="color:red">Yellow template for low requests</h2>'
    })
    .component('yellowTwo', {
      template: '<h1 style="color:blue">Yellow template for high requests</h1>'
    });
}(angular));
