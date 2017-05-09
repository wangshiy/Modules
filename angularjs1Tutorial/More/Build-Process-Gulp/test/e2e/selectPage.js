import * as _ from 'lodash';

import { ArchetypeDisplay } from './archetypeDisplayPage';

//http://gthill.blogspot.com/2009/12/unit-testing-what-to-test-right-bicep.html

export class SelectPage {
  enterName(name) {
    return $('input[name="name"]').sendKeys(name);
    // Another example for if you are using components
    // return $("character-name-form input").sendKeys(name);
  }
  clearName() {
    return $('input[name="name"]').clear();
  }
  pick(index) {
    return element.all(by.css('a img')).get(index).click().then(browser.getTitle);
  }
  archetypeCount() {
    return element.all(by.css('archetype-display')).count();
  }
  enterSearch(text) {
    return $('.character-select input').sendKeys(text);
  }
  clearSearch() {
    return $('.character-select input').clear();
  }
  clickPill(category, option) {
    //Performance tip: it will run faster if this is combined as a single selector
    return $('.category-' + category)
      .element(by.buttonText(option)).click();
  }
  constructor() {
    this.pageName = 'Select';
  }

  //simple straightforward, but no component wrapper
  //tradeoff - if archetype changes its html we make multiple changes across the tests
  getArchetypeNamesWithoutWrapper() {
    //promise that returns the text of the element
    return element.all(by.css('archetype-display h3')).getText();
  }

  getArchetypes(scenario) {
    //though this is cleaner, talking to the browser is slow and
    //developers should reduce any interaction with the browser possible
    this.clearSearch();
    this.clickPill('sex', 'All');
    this.clickPill('race', 'All');
    this.clickPill('stat-pref', 'None');

    if (scenario.text) {
      this.enterSearch(scenario.text);
    }
    if (scenario.sex) {
      this.clickPill('sex', scenario.sex);
    }
    if (scenario.race) {
      this.clickPill('race', scenario.race);
    }
    if (scenario.statPref) {
      this.clickPill('stat-pref', scenario.statPref);
    }
    return ArchetypeDisplay.getAllNames();
  }

  load() {
    browser.get('/#/select');
    this.loaded = true;
  }

  loadIfNeeded() {
    //ideally this checks the page state (URL or Title) but is slower and out of scope for now
    if (!this.loaded) {
      this.load();
    }
  }
}
