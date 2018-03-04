import StorageConnector from './../StorageConnector';

describe('StorageConnector', () => {
  it('should set item and then get it', () => {
    const mockedStorage = {
      setItem: function(key, value) { this[key] = value},
      getItem: function(key) { return this[key]},
    };
    const onMessage = jest.fn();
    const connector = new SocketConnector({eventName: 'some', socket: mockedSocket});
    connector.connect(onMessage);
    expect(connector.eventName).toBe('some');
    expect(mockedSocket.on.mock.calls.length).toBe(3);
    expect(mockedSocket.on.mock.calls[0][0]).toBe('connect');
    expect(mockedSocket.on.mock.calls[1][0]).toBe('some');
    expect(mockedSocket.on.mock.calls[2][0]).toBe('disconnect');
  });
});
