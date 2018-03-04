import { browser, element, by } from 'protractor';

class ChatDriver {
  when = {
    navigated: async (url = '/') => browser.get(url),
    enterUsername: async (value) => {
      await this.get.username().clear();
      await this.get.username().sendKeys(value);
      return this;
    },
    enterMessage: async (value) => {
      await this.get.message().clear();
      await this.get.message().sendKeys(value);
      return this;
    },
    sendMessage: async () => {
      await this.get.sendButton().click();
      return this;
    }
  };

  is = {
    ok: () => element(by.css('#root')).isDisplayed(),
  };

  get = {
    avatarSrc: () => element(by.css(`[data-hook="avatar"] img`)).getAttribute('src'),
    usernameValue: () => this.get.username().getAttribute('value'),
    messageValue: () => this.get.message().getAttribute('value'),
    username: () => this.findByDataHook('username-text-field-input'),
    message: () => this.findByDataHook('message-text-field-textarea'),
    sendButton: () => this.findByDataHook('send-button-el'),
    messagesTexts: () => this.findByDataHook('message-text').getText(),
    numberOfMessages: () => element.all(by.css(`[data-hook="message-text"]`)).count(),
    avatarSrcInMessage: element(by.css(`[data-hook="message"] [data-hook="avatar"] img`)).getAttribute('src'),
  }

  findByDataHook = (name) => element(by.css(`[data-hook="${name}"]`))
}

export default ChatDriver;
