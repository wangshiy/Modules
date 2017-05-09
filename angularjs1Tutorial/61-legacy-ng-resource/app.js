(function (angular) {
  'use strict';

  angular.module('phonecatApp', [
    'ngRoute',
    'phonecatServices'
  ])

    .config(['$routeProvider',
      function ($routeProvider) {
        $routeProvider.
          when('/phones', {
            templateUrl: 'phone-list.html',
            controller: 'PhoneListCtrl'
          }).
          when('/phones/:phoneId', {
            templateUrl: 'phone-detail.html',
            controller: 'PhoneDetailCtrl'
          }).
          otherwise({
            redirectTo: '/phones'
          });
      }])

    .controller('PhoneListCtrl',
    function ($scope, Phone) {
      $scope.phones = Phone.query();
      $scope.orderProp = 'age';
    })

    .controller('PhoneDetailCtrl',
    function ($scope, $routeParams, Phone) {
      // Beware:
      $scope.phone = Phone.get({ phoneId: $routeParams.phoneId },
        phone => $scope.mainImageUrl = phone.images[0]
      );

      $scope.setImage = imageUrl => $scope.mainImageUrl = imageUrl;
    })

    .filter('checkmark', function () {
      return input => input ? '\u2713' : '\u2718';
    });

}(angular));
