import ChatDriver from './Chat.driver';

describe('Chat functionality tests', () => {
  let driver = null;

  beforeEach(() => {
    driver = new ChatDriver();
  });

  it('should navigate and show first page', async () => {
    await driver.when.navigated();
    expect(await driver.is.ok()).toBeTruthy();
  });

  describe('Tests according to spec', () => {
    it('Text field for username should be persistent across browser refreshes', async () => {
      await driver.when.navigated();
      expect(await driver.is.ok()).toBeTruthy();
    });
  })
});
