(function (angular) {
  'use strict';

  /*
    Services -> injectable
    Ways to make Services:
    .constant
    .value
    .service
    .factory
  */
  /* Javascript constructor functions look like this:
  function Foo() {
    this.prop1 = "eee";
  }

  const s = new Foo();

  const f = { prop1: "eee" };
  */


  // class MyService {
  //   sayHello(name) {
  //     return "Hi " + name + "!";
  //   }

  //   fullGreeting(n) {
  //     return "Greetings;" + mys.sayHello(n);
  //   };
  // }

  function MyService(/* DI */) {
    // service is just a constructor function
    // that will be called with 'new'
    const mys = this;
    mys.sayHello = function (name) {
      return 'Hi ' + name + '!';
    };
    mys.fullGreeting = function (n) {
      return 'Greetings;' + mys.sayHello(n);
    };
  }

  function myFactory(/* DI */) {
    // factory returns an object
    // you can run some code before
    function sayHello(name) {
      return 'Hi ' + name + '!';
    }
    function fullGreeting(n) {
      return 'Greetings;' + sayHello(n);
    }
    return {
      sayHello: sayHello,
      fullGreeting: fullGreeting
    };
  }

  function justSayHello(/* DI */) {
    return function (name) {
      return 'Hi ' + name + '!';
    };
  }

  function JustSayHelloService() {
    this.justSayHello = function (name) {
      return 'Hi ' + name + '!';
    };
  }

  angular.module('apiExamples', [])
    .service('myService', MyService)
    .factory('myFactory', myFactory)
    .factory('justSayHello', justSayHello)
    .service('justSayHelloService', JustSayHelloService);

}(angular));
