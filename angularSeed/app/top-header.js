angular.module('palaSearch')
    .directive('topHeader', function() {
        return {
            restrict: 'AE',
            scope: {
                deploys: '=deployments',
                pageTitle: '@'
            },
            templateUrl: 'top-header.html',
            controller: ['$rootScope', '$scope', function($rootScope, $scope) {
                $scope.title = "hello";

            }]

        }
    });