import SocketConnector from './../SocketConnector';

describe('Messages actions', () => {
  it('should create socket connector and receive message', () => {
    const mockedSocket = {
      on: jest.fn(),
      emit: jest.fn(),
    };
    const onMessage = jest.fn();
    const connector = new SocketConnector({eventName: 'some', socket});
    connector.connect(onMessage);
    expect(connector.eventName).toBe('some');
    expect(connector.on).toBeCalledWith();
  })
});
