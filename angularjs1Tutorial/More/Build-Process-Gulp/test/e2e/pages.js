import { SelectPage } from './selectPage';
import { WelcomePage } from './welcomePage';
import { ConfigurePage } from './configurePage';

var titleMap = {
  'Select': () => new SelectPage(),
  'Welcome': () => new WelcomePage(),
  'Configure': () => new ConfigurePage()
};

export function createPageObject(text) {
  return titleMap[text]();
}
