
import MessageTextDriver from './MessageText.driver';

describe('MessageText', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageTextDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });

  it('renders with correct text', () => {
    expect(driver.when.render({text: '123'}).get.text()).toBe('123');
  });
});

