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

    xit('Text field for message should be cleared after each message send', async (done) => {
      await driver.when.navigated();
      await driver.when.enterMessage('Hey guys');

      expect(await driver.get.messageValue()).toBe('Hey guys');
      await driver.when.sendMessage();
      expect(await driver.get.messageValue()).toBe('');

      // we need to wait till server will ping us with new message
      setTimeout(async () => {
        expect(await driver.get.messagesTexts()).toContain('Hey guys');
        done();
      }, 500);
    });

    xit('Send button click should send messages', async (done) => {
      await driver.when.navigated();
      await driver.when.enterMessage('Hey guys');
      await driver.when.sendMessage();
      // we need to wait till server will ping us with new message
      setTimeout(async () => {
        expect(await driver.get.messagesTexts()).toContain('Hey guys');
        done();
      }, 500);
    });

    xit('User should receive random avatar', async () => {
      await driver.when.navigated();
      expect(await driver.get.avatarSrc()).toContain('https://spotim-demo-chat-server.herokuapp.com/avatars/');
    });

    xit('Avatar should be same after page refresh', async () => {
      await driver.when.navigated();
      const avatar = await driver.get.avatarSrc();
      expect(avatar).toContain('https://spotim-demo-chat-server.herokuapp.com/avatars/');
      await driver.when.navigated();
      expect(await driver.get.avatarSrc()).toContain(avatar);
    });

    xit('User can not send empty message', async (done) => {
      await driver.when.navigated();
      expect(await driver.get.numberOfMessages()).toBe(0);
      await driver.when.sendMessage();

      // we need to wait till server will ping us with new message
      setTimeout(async () => {
        expect(await driver.get.numberOfMessages()).toBe(0);
        await driver.when.enterMessage('Hey guys');
        await driver.when.sendMessage();
        setTimeout(async () => {
          expect(await driver.get.numberOfMessages()).toBe(1);
          done();
        }, 500);
      }, 500)
    });

    it('Should render messages with avatar, text and name', async (done) => {
      await driver.when.navigated();
      await driver.when.enterMessage('Hey guys');
      await driver.when.sendMessage();

      // we need to wait till server will ping us with new message
      setTimeout(async () => {
        expect(await driver.get.numberOfMessages()).toBe(1);
        expect(await driver.get.avatarSrcInMessage()).toContain('https://spotim-demo-chat-server.herokuapp.com/avatars/');
        expect(await driver.get.messagesTexts()).toContain('AnonymousHey guys');
        done();
      }, 800)
    });
  })
});
