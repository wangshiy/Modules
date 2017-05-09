describe('The exampleApp module', () => {
  beforeEach(module('exampleApp'));

  describe('myService', () => {
    let myService;
    beforeEach(inject(_myService_ => {
      myService = _myService_;
    }));

    it('should say hello', () => {
      // write a failing test first
      const result = 'Hi Joe!';
      expect(myService.sayHello('John')).toEqual(result);
    });
  });
});
