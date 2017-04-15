import { AngCliAppPage } from './app.po';

describe('ang-cli-app App', () => {
  let page: AngCliAppPage;

  beforeEach(() => {
    page = new AngCliAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
