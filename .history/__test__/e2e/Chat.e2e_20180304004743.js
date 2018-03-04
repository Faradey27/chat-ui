import ChatDriver from './Chat.driver';

describe('Chat functionality tests', () => {
  let driver = null;

  beforeEach(() => {
    driver = new ChatDriver();
  });

  xit('should navigate and show first page', async () => {
    await driver.when.navigated();
    expect(await driver.is.ok()).toBeTruthy();
  });

  xit('Text field for username should be Anonymous by default', async () => {
    await driver.when.navigated();
    expect(await driver.get.usernameValue()).toBe('Anonymous');
  });

  describe('Tests according to spec', () => {
    it('Text field for username should be persistent across browser refreshes', async (done) => {
      await driver.when.navigated();
      await driver.when.enterUsername('Random1');
      // expect(await driver.get.usernameValue()).toBe('');
    });
  })
});
