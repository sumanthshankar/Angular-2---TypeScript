import { DeveloperProjectPage } from './app.po';

describe('developer-project App', function() {
  let page: DeveloperProjectPage;

  beforeEach(() => {
    page = new DeveloperProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
