(function (angular) {
  'use strict';

  angular.module('promisesModule', [])
    .component('promiseExample', {
      templateUrl: 'promises.html',
      controller: PromiseController
    })
    .service('promiseService', PromiseService);

  function PromiseController(promiseService) {
    const pc = this;
    promiseService.calculate().then((data) => {
      pc.answer = data;
    });
  }

  function PromiseService($http, $timeout, $interval, $q) {
    this.calculate = function () {
      function extractData(response) {
        return response.data;
      }

      const p1 = $http.get('../demo-data/shapes.json').then(extractData);

      const p2 = $timeout(() => {
        return 3;
      }, 2000);

      const p3 = $http.get('../demo-data/colors.json').then(extractData);

      const p4 = $interval(() => {
        return 4;
      }, 500, 4);

      // Using more than one plain function together looks like this:
      // function aa() {}
      // function bb() { throw "444"}
      // function cc() {}
      // function dd() {
      //   aa();
      //   bb();
      //   cc();
      // }

      // Verbose, and serial:
      p1.then(v => {
        p2.then(v2 => {
          p3.then(v3 => {
            p4.then(v4 => {
              console.log('answer-serial: ', v, v2, v3, v4);
              // console.log('length of http responses: ', v3.length + v.length)
            });
          });
        });
      });

      // Concise, and "parallel".
      return $q.all([p1, p2, p3, p4])
        .then(answers => {
          console.log('length of http responses: ', answers[0].length + answers[2].length);
          return answers;
        },
        e => {
          console.error('error from $q all', e);
        });
    };
  }

}(angular));
