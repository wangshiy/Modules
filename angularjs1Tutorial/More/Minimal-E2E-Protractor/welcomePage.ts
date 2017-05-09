import { browser, $ } from 'protractor';

export class WelcomePage {
  message() {
    return $('#welcome-message').click().then(browser.getTitle);
  }
  load() {
    browser.get('/');
  }
}
