
import MessageListAreaDriver from './MessageListArea.driver';

describe('MessageListArea', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageListAreaDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });

  it('renders list of messages', () => {
    const messages = [
      {id: '1', text: '123', user: {avatar: '', name: 'user1'}},
      {id: '2', text: '456', user: {avatar: '', name: 'user2'}},
    ];
    expect(driver.when.render({messages}).get.text()).toBe();
  });
});

