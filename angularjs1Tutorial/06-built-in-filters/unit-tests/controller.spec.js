describe('An instance of CountryController', () => {
  beforeEach(module('app'));

  let countryControllerInstance;
  beforeEach(inject($controller => {
    countryControllerInstance = $controller('CountryController');
  }));

  it('should contain a list with the correct number of countries', () => {
    expect(countryControllerInstance.countries.length).toEqual(7);
  });
});
