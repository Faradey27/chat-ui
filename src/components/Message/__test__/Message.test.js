
import MessageDriver from './Message.driver';

describe('Message', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });
});

