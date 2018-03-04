import { browser, element, by } from 'protractor';

class ChatDriver {
  when = {
    navigated: async (url = '/') => browser.get(url),
  };

  is = {
    ok: () => element(by.css('#root')).isDisplayed(),
  };

  get = {
    username: () => this.findByDataHook('username-text-field-input').getAttribute('value')
  }

  findByDataHook = (name) => by.css(`[data-hook="${name}]"`)
}

export default ChatDriver;
