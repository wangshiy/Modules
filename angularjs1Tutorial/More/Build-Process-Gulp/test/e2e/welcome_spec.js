import { WelcomePage } from './welcomePage';

describe('The welcome page', () => {
  var welcomePage = new WelcomePage();

  beforeEach(() => {
    welcomePage.load();
  });

  it('welcomes you', () =>
    expect(welcomePage.welcomesYou()).toBeTruthy());
  it('instructs you', () =>
    expect(welcomePage.instructsYou()).toBeTruthy());
  it('goes to the select page', () =>
    expect(welcomePage.clickGo()).toBe('Select'));
});
