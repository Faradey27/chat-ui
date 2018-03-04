
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
    expect(driver.when.render({isOwnMessage: true}).get.messageBackground()).toContain('rgb(219, 244, 253);');
  });

  it('should have another background for not own messages', () => {
    expect(driver.when.render({isOwnMessage: false}).get.messageBackground()).toContain('rgb(219, 244, 253);');
  });
});

