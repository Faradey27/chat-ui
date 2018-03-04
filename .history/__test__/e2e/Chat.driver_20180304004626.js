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
    usernameValue: () => this.get.username().getAttribute('value')
    username: () => this.findByDataHook('username-text-field-input')
  }

  findByDataHook = (name) => element(by.css(`[data-hook="${name}"]`))
}

export default ChatDriver;
