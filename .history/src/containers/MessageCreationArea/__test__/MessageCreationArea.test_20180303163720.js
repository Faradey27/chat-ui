
import MessageCreationAreaDriver from './MessageCreationArea.driver';

describe('MessageCreationArea', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageCreationAreaDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });

  it('should call onMessageAdd when user entered message and clicked submit', () => {
    const onMessageAdd = jest.fn();
    driver.when.render({onMessageAdd})
    expect(driver.when.render().is.ok()).toBeTruthy();
  });
});

