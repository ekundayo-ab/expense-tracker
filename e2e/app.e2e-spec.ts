import { Page } from './app.po';
import { browser } from 'protractor';

describe('App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/');
    });

    it('should have a title saying Ionic Blank', () => {
      page.getPageOneTitleText().then(title => {
        expect(title).toEqual('Ionic Blank');
        browser.sleep(5000);
      });
    });
  })
});
