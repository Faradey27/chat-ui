
import MessageDateDriver from './MessageDate.driver';

describe('MessageDate', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageDateDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });

  it('renders with correct date', () => {
    expect(driver.when.render({date: 123}).get.text()).toBe('123');
  });
});

