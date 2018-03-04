
import MessageCreationAreaDriver from './MessageCreationArea.driver';

describe('MessageCreationArea', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageCreationAreaDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });

  it('should trigger onClick callback when user clicked on button', () => {
    const onClick = jest.fn();
    driver.when.render({onClick}).when.clicked();
    expect(onClick).toBeCalled();
  });
});

