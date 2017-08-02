import { DynamicContentPage } from './app.po';

describe('manual-entry-content App', () => {
  let page: DynamicContentPage;

  beforeEach(() => {
    page = new DynamicContentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
