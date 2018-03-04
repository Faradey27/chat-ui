
describe('Chat', () => {
  beforeEach(() => {
    driver = new ChatDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });
});

