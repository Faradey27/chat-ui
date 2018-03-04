
import MessageTextDriver from './MessageText.driver';

describe('MessageText', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageTextDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });

  it('should trigger onChange callback when user typing', () => {
    const onUsernameChange = jest.fn();
    driver.when.render({onUsernameChange}).when.typed('123');
    expect(onUsernameChange).toBeCalledWith('123');
  });
});

