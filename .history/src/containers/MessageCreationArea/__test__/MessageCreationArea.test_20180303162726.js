
import MessageCreationAreaDriver from './MessageCreationArea.driver';

describe('MessageCreationArea', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageCreationAreaDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });
});

