(function (angular) {
  'use strict';

  angular.module('exampleApp', ['apiExamples', 'countries'])
    .constant('BASEAPIURL', 'http://mysite.com')
    .value('closeToPi', 3.14159)
    .component('apiExamples', {
      templateUrl: 'services.html',
      controller: ApiExampleController
    });

  function ApiExampleController(myService, myFactory, justSayHello,
    BASEAPIURL, closeToPi, justSayHelloService) {
    this.greeting1 = myService.sayHello('Joe');
    this.greeting2 = myFactory.sayHello('Joe');
    this.greeting3 = justSayHelloService.justSayHello('Joe');
    this.url = BASEAPIURL;
    this.n = closeToPi;
  }

}(angular));
