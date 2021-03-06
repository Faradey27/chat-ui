
import MessageTextFieldDriver from './MessageTextField.driver';

describe('MessageTextField', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageTextFieldDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });

  it('should trigger onChange callback when user typing', () => {
    const onMessageChange = jest.fn();
    driver.when.render({onMessageChange}).when.typed('123');
    expect(onMessageChange).toBeCalledWith('123');
  });
});

