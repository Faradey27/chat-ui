
import ChatDriver from './Chat.driver';

describe('Chat', () => {
  let driver = null;

  beforeEach(() => {
    driver = new ChatDriver();
  });

  it('snapshot test', () => {
    const tree = driver.get.snapshot();
    expect(tree).toMatchSnapshot();
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
    expect(driver.get.emitMockedFunc().mock.calls.length).toBe(1);
    expect(driver.get.emitMockedFunc().mock.calls[0][1].text).toBe('message');
    expect(driver.get.emitMockedFunc().mock.calls[0][1].user.name).toBe('name');
  });
});

