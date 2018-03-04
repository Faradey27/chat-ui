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
    xit('Text field for username should be persistent across browser refreshes', async () => {
      await driver.when.navigated();
      await driver.when.enterUsername('Random1');
      expect(await driver.get.usernameValue()).toBe('Random1');

      await driver.when.navigated();
      expect(await driver.get.usernameValue()).toBe('Random1');
    });

    it('Text field for message should be cleared after each message send', async () => {
      await driver.when.navigated();
      await driver.when.enterMessage('Hey guys');

      expect(await driver.get.messageValue()).toBe('Hey guys');
      await driver.when.sendMessage();
      expect(await driver.get.messageValue()).toBe('');
      expect(await driver.get.messagesTexts()).toContain('Hey guys');
    });
  })
});
