import { ClockPage } from './app.po';

describe('clock App', function() {
  let page: ClockPage;

  beforeEach(() => {
    page = new ClockPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
