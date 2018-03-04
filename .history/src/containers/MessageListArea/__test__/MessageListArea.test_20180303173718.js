
import MessageListAreaDriver from './MessageListArea.driver';

describe('MessageListArea', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageListAreaDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });

  it('should call onMessageAdd when user entered message and clicked submit', () => {
    const onMessageAdd = jest.fn();
    driver.when.render({onMessageAdd}).when.messageEntered('123').when.sendMessage();
    expect(onMessageAdd.mock.calls[0][0].text).toBe('123');
  });
});

