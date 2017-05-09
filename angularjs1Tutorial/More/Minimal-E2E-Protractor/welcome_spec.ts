import { WelcomePage } from './welcomePage';

describe('First page', () => {
  var w = new WelcomePage();

  beforeEach(() => {
    w.load();
  });

  it('has something', () =>
    expect(w.message()).toBe("Welcome"));
});
