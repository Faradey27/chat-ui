
import SendButtonDriver from './SendButton.driver';

describe('SendButton', () => {
  let driver = null;

  beforeEach(() => {
    driver = new SendButtonDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });
});

