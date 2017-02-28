import { Riosjaime.ComPage } from './app.po';

describe('riosjaime.com App', () => {
  let page: Riosjaime.ComPage;

  beforeEach(() => {
    page = new Riosjaime.ComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
