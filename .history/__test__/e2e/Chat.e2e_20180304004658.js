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

  it('Text field for username should be Anonymous by default', async () => {
    await driver.when.navigated();
    expect(await driver.get.usernameValue()).toBe('Anonymous');
  });

  describe('Tests according to spec', () => {
    it.only('Text field for username should be persistent across browser refreshes', async () => {
      await driver.when.navigated();
      await driver.when.enterUsername('Random1');
      expect(await driver.get.usernameValue()).toBe('');
    });
  })
});
