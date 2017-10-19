import { CarsPage } from './app.po';

describe('cars App', function() {
  let page: CarsPage;

  beforeEach(() => {
    page = new CarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
