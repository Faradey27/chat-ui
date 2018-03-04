
import MessageDriver from './Message.driver';

describe('Message', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });

  it('should have own background for own messages', () => {
    expect(driver.when.render({isOwnMessage: true}).get.messageBackground()).toContain('#dbf4fd');
  });
});

