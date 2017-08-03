import { JumpingIntoAngularCliPage } from './app.po';

describe('jumping-into-angular-cli App', () => {
  let page: JumpingIntoAngularCliPage;

  beforeEach(() => {
    page = new JumpingIntoAngularCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
