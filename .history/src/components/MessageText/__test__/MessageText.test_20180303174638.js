
import MessageTextDriver from './MessageText.driver';

describe('MessageText', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageTextDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });
});

