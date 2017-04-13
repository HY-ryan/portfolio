import { CliAngular4PortfolioPage } from './app.po';

describe('cli-angular4-portfolio App', () => {
  let page: CliAngular4PortfolioPage;

  beforeEach(() => {
    page = new CliAngular4PortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
