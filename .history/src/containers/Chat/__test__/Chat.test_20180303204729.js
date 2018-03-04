
import ChatDriver from './Chat.driver';

describe('Chat', () => {
  let driver = null;

  beforeEach(() => {
    driver = new ChatDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });

  it('should connect socket on mount', () => {
    expect(driver.when.render().is.socketConnected()).toBeTruthy();
  });

  it('should set username, useravatar, user message and send it on click', () => {
    const addMessage = jest.fn();
    driver
      .when.render({addMessage})
      .when.nameEntered('name')
      .when.messageEntered('message')
      .when.sendMessage();
    expect(addMessage.mock.calls.length).toBe(1);
  });
});

