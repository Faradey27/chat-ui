
import MessageCreationAreaDriver from './MessageCreationArea.driver';

describe('MessageCreationArea', () => {
  let driver = null;

  beforeEach(() => {
    driver = new MessageCreationAreaDriver();
  });

  it('renders without crashing', () => {
    expect(driver.when.render().is.ok()).toBeTruthy();
  });

  it('should call onMessageAdd when user entered message and clicked submit', () => {
    const onMessageAdd = jest.fn();
    driver.when.render({onMessageAdd}).when.messageEntered('123').when.sendMessage();
    expect(onMessageAdd.mock.calls[0][0].text).toBe('123');
  });

  it('should not call onMessageAdd when user clicked submit but not entered message', () => {
    const onMessageAdd = jest.fn();
    driver.when.render({onMessageAdd}).when.sendMessage();
    expect(onMessageAdd).not.toBeCalled();
  });

  it('should not set avatar if it already setted', () => {
    const setUserAvatar = jest.fn();
    driver.given.initialStore({user: {avatar: '123', name: ''}});
    driver.when.render({setUserAvatar}).when.sendMessage();
    expect(setUserAvatar).not.toBeCalled();
  });
});

