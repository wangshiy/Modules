(function (angular) {
  'use strict';

  angular.module('app', [])
    .config(($httpProvider) => {
      // Register an interceptor via an anonymous factory function
      $httpProvider.interceptors.push((/* DI here */) => {
        return {
          'request': function (config) {
            config.headers['X-SECRET-HEADER'] = 'g76dg34f764';
            return config;
          },
          'response': function (response) {
            return response;
          }
        };
      });
    })
    .service('answerService', AnswerService)
    .component('exampleApp', {
      templateUrl: 'results.html',
      controller: ExampleController,
      controllerAs: 'ec'
    });

  function AnswerService($http) {
    this.loadData = function () {
      const url = 'https://jira-item-create.appspot.com/auth-example';
      return $http.get(url)
        .then((d) => {
          return d.data;
        });
    };
  }

  function ExampleController(answerService) {
    const vm = this;

    answerService.loadData().then((answer) => {
      vm.answer = answer;
    }).catch((err) => {
      vm.err = err;
    });
  }

}(angular));
