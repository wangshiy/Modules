import { SelectPage } from './selectPage';

var sp = new SelectPage();

describe('The character select screen', () => {
  beforeEach(() => {
    sp.load();
  });

  it('creates a character', () => {
    sp.enterName('Jaina Solo');
    expect(sp.pick(0)).toBe('Configure');
  });

  // Pre ES6 version of the above.
  it('creates another character', function () {
    sp.enterName('Jacen Solo');
    expect(sp.pick(0)).toBe('Configure');
  });

  it('requires a character name', () => {
    expect(sp.pick(0)).toBe('Select');
    sp.enterName('Anakin Solo');
    sp.clearName();
    expect(sp.pick(0)).toBe('Select');
  });

  it('can search by name', () => {
    expectCount(10);
    sp.enterSearch('Gandalf the Grey');
    expectCount(0);
    sp.clearSearch();
    sp.enterSearch('lars');
    expectCount(2);
  });

  function expectCount(count) {
    expect(sp.archetypeCount()).toBe(count);
  }

  it('can search by category', () => {
    expectCount(10);
    sp.clickPill('Sex', 'Female');
    expectCount(2);
    sp.clickPill('Sex', 'Male');
    expectCount(5);
    sp.clickPill('Sex', 'Other');
    expectCount(3);
    sp.clickPill('Sex', 'All');
    expectCount(10);
  });

  it('should support filter combinations', () => {
    sp.clickPill('Sex', 'Male');
    sp.enterSearch('lars');
    expectCount(1);
    sp.clickPill('Race', 'Droid');
    expectCount(0);
  });
});
