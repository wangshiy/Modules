export class WelcomePage {
  constructor() {
    this.pageName = 'Welcome';
  }
  welcomesYou() {
    // You can use many different ways to select elements,
    // use things as they make sense
    return $('#welcome-message').getText();
  }
  instructsYou() {
    return $('.instructions').getText();
  }
  clickGo() {
    return $('a').click().then(browser.getTitle);
  }
  load() {
    browser.get('/');
  }
}
