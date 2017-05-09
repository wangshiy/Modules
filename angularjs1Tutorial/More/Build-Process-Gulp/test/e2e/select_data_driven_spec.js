import * as _ from 'lodash';

import { createPageObject } from './pages';
import { SelectPage } from './selectPage';
import { scenarios } from './facetScenarios';

var sp = new SelectPage();
describe('The character select screen (v data driven)', () => {
  beforeEach(() => {
    sp.loadIfNeeded();
  });

  _.forEach(scenarios, function (s) {
    it('filters the archetypes [' + JSON.stringify(s) + ']', () => {
      expect(sp.getArchetypes(s)).toEqual(s.expectedArchetypes);
    });
  });
});
