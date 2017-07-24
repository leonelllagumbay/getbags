import { WhatPage } from './app.po';

describe('what App', () => {
  let page: WhatPage;

  beforeEach(() => {
    page = new WhatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
