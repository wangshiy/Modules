angular.module('palaSearch')
    .directive('leftSlider', function() {
        return {
            restrict: 'AE',
            scope: {
                deploys: '=deployments',
                pageTitle: '@'
            },
            templateUrl: 'left-slider.html',
            controller: ['$rootScope', '$scope', function($rootScope, $scope) {
                $scope.title = "hello";

            }]

        }
    });