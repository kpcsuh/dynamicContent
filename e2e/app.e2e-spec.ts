import { DynamicContentPage } from './app.po';

describe('dynamic-content App', () => {
  let page: DynamicContentPage;

  beforeEach(() => {
    page = new DynamicContentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
