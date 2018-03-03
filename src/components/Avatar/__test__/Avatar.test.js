
import AvatarDriver from './Avatar.driver';

describe('Avatar', () => {
  let driver = null;

  beforeEach(() => {
    driver = new AvatarDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });
});

