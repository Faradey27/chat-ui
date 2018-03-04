import { browser, element, by } from 'protractor';

class ChatDriver {
  when = {
    navigated: async (url = '/') => browser.get(url),
  };
  is = {
    ok: () => element(by.css('[data-hook=home-page]')).isDisplayed(),
  };
}

export default ChatDriver;
