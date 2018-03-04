describe('HomePage functionality test', () => {
  let driver = null;

  beforeEach(() => {
    driver = new HomePageDriver();
  });

  it('should navigate and show home page', async () => {
    await driver.when.navigated();
    expect(await driver.is.ok()).toBeTruthy();
  });
});
