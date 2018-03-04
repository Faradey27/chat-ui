import SocketConnector from './../SocketConnector';

describe('Messages actions', () => {
  it('should create socket connector and receive message', () => {
    const mockedSocket = {
      on: jest.fn(),
      emit: jest.fn(),
    };
    const onMessage = jest.fn();
    const connector = new SocketConnector({eventName: 'some', socket: mockedSocket});
    connector.connect(onMessage);
    expect(connector.eventName).toBe('some');
    expect(mockedSocket.on.mock.calls.length).toBe(3);
    expect(mockedSocket.on.mock.calls[0][0]).toBe('connect');
  })
});
