
import MessageTextDriver from './MessageText.driver';

describe('MessageUsername', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageTextDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });

  it('renders with correct text', () => {
    expect(driver.when.render({username: 'user'}).get.text()).toBe('user');
  });
});

