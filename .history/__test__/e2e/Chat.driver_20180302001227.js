import { browser, element, by } from 'protractor';

class HomeDriver {
  when = {
    navigated: async (url = '/') => browser.get(url),
  };
  is = {
    ok: () => element(by.css('[data-hook=home-page]')).isDisplayed(),
  };
}

export default HomeDriver;
