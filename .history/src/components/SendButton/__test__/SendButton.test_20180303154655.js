
import ChatDriver from './Chat.driver';

describe('SendButton', () => {
  let driver = null;

  beforeEach(() => {
    driver = new ChatDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });

  it('should trigger onChange callback when user typing', () => {
    const onClick = jest.fn();
    driver.when.render({onClick}).when.clicked();
    expect(onClick).toBeCalled();
  });
});

