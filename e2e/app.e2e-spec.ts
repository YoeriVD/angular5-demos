import { AppPage } from './app.po';

describe('expenses-demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();    
  });

  it('should be able to add an expense', () => {
    expect(page.list.rows.count()).toBe(4);
    page.form.name.sendKeys('Drink');
    page.form.date.sendKeys('12/11/2017');
    page.form.amount.sendKeys(15.5);
    page.form.submit.click();
    expect(page.list.rows.count()).toBe(5);
  });
});
