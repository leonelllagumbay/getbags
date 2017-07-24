import { GETBAGSPage } from './app.po';

describe('getbags App', () => {
  let page: GETBAGSPage;

  beforeEach(() => {
    page = new GETBAGSPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
