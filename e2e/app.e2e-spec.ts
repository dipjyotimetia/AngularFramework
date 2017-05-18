import { AngularFrameworkPage } from './app.po';

describe('angular-framework App', () => {
  let page: AngularFrameworkPage;

  beforeEach(() => {
    page = new AngularFrameworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
