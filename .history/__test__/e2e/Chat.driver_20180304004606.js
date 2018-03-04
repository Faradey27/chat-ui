import { browser, element, by } from 'protractor';

class ChatDriver {
  when = {
    navigated: async (url = '/') => browser.get(url),
    enterUsername: () => {

    }
  };

  is = {
    ok: () => element(by.css('#root')).isDisplayed(),
  };

  get = {
    usernameValue: () => this.findByDataHook('username-text-field-input').getAttribute('value')
  }

  findByDataHook = (name) => element(by.css(`[data-hook="${name}"]`))
}

export default ChatDriver;
