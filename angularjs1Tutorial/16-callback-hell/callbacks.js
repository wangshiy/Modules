(function (angular) {
  'use strict';

  // Callbacks are hard to deal with

  angular.module('callbackModule', [])
    .component('callbackExample', {
      template: '<p>CallbackController: Nothing to see here, check the console.</p>',
      controller: CallbackController
    });

  function CallbackController() {

    function ddd(value) {
      return value + 3;
    }

    // Ordinary function composition
    // print ccc(ddd(34));

    function a(callBack) {
      setTimeout(() => { callBack('hello'); }, 2000);
      return 'Sorry, not available yet';
    }

    function b(p1, callBack) {
      setTimeout(() => { callBack(p1 + 'andmore'); }, 2000);
      return 'Sorry, not available yet';
    }

    a(val => {
      b(val, val2 => {
        console.log(val2);
      });
    });

    //  parallel

    function c(callBack) {
      setTimeout(() => { callBack(50); }, 1000);
    }

    function d(callBack) {
      setTimeout(() => { callBack(4); }, 1000);
    }

    let answers = [];

    function checkDone() {
      if (answers.length === 2) {
        console.log(answers[0] + answers[1]);
      }
    }

    d(v2 => {
      answers.push(v2);
      checkDone();
    });

    c(v1 => {
      answers.push(v1);
      checkDone();
    });

  }

}(angular));
