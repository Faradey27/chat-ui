
import MessageListAreaDriver from './MessageListArea.driver';

describe('MessageListArea', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageListAreaDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });
});

