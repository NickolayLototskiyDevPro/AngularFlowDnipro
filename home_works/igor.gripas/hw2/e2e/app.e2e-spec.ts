import { Hw2Page } from './app.po';

describe('hw2 App', function() {
  let page: Hw2Page;

  beforeEach(() => {
    page = new Hw2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
