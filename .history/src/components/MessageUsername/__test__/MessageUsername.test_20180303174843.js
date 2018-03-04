
import MessageUsernameDriver from './MessageUsername.driver';

describe('MessageUsername', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageUsernameDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });

  it('renders with correct text', () => {
    expect(driver.when.render({username: 'user'}).get.text()).toBe('user');
  });
});

