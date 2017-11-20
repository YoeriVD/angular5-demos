import { browser, by, element } from 'protractor';
import { ElementFinder, ElementArrayFinder } from 'protractor/built/element';

export class AppPage {
  constructor() {

  }
  form = new Form();
  list = new List();
  navigateTo() {
    return browser.get('/');
  }
}

export class Form {
  get name() {
    return element(by.id('name'));
  }
  get date() {
    return element(by.id('date'));
  }
  get amount() {
    return element(by.id('amount'));
  }
  get submit() {
    return element(by.css('button[type="submit"]'))
  }
}
export class List {
  get rows(): ElementArrayFinder {
    return element.all(by.css('tbody tr'));
  }
}