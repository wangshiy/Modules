(function (angular) {
  'use strict';

  function LoginController(loginService, dataService) {
    const lc = this;
    lc.loginStatus = false;
    let loginResultPromise;

    lc.login = function () {
      // get a promise
      loginResultPromise = loginService.login();

      // Update view with status from promise
      loginResultPromise.then(result => {
        lc.loginStatus = result;
      });

      // Go get some other data
      loginResultPromise.then(result => {
        if (result) {
          console.log('id: ', result.id);
          return loginService.getSomeData().then((data) => {
            lc.loginData = data;
            return data;
          });
        }
      }).then(res => {
        console.log('Promise for promise? ', res);
        console.log(res.then);
      });

      loginResultPromise.then(data => console.log(data));

      // pass it to a function (which calls .then on it)
      dataService.processLogin(loginResultPromise);
    };

  }

  function LoginService($http) {
    const ls = this;
    const userPromise = $http.get('../demo-data/workers.json')
      .then(response => {
        ls.currentUser = response.data[0];
        return ls.currentUser;
      });
    this.login = function () {
      return userPromise.then(currentUser => {
        console.log('data is: ', currentUser);
        //very naive login service
        if (currentUser.id === 1) {
          return currentUser;
        }
        return false;
      });
    };

    const dataPromise = $http.get('/demo-data/colors.json')
      .then(res => res.data);
    this.getSomeData = function () {
      return dataPromise;
    };
  }

  function DataService() {
    this.processLogin = function (loginPromise) {
      loginPromise.then(() => {
        console.log('login processed');
      });
    };
  }

  angular.module('app', [])
    .component('promiseTree', {
      templateUrl: 'login.html',
      controller: LoginController
    })
    .service('loginService', LoginService)
    .service('dataService', DataService);

}(angular));
