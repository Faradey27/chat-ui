
import MessageListAreaDriver from './MessageListArea.driver';

describe('MessageListArea', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageListAreaDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });

  it('renders list of messages', () => {
    const messages = [
      {id: '1', text: '123', date: 1520115176550, user: {avatar: '', name: 'user1'}},
      {id: '2', text: '456', date: 1520115176550, user: {avatar: '', name: 'user2'}},
    ];
    driver.given.initialStore({messages});
    expect(driver.when.render().get.text()).toBe('user112300:12user245600:12');
  });

  it('should scroll down when number of messages changed', () => {
    const messages = [
      {id: '1', text: '123', date: 1520115176550, user: {avatar: '', name: 'user1'}},
      {id: '2', text: '456', date: 1520115176550, user: {avatar: '', name: 'user2'}},
    ];
    driver.given.initialStore({messages});
    expect(driver.when.render().get.text()).toBe('user11230:12user24560:12');
    expect(driver.emulateDidUpdateOnViewAndGetScrollCallback()).toBeCalled();
  });
});

