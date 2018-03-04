import SocketConnector from './../SocketConnector';

describe('Messages actions', () => {
  it('should create socket connector and receive message', () => {
    const mockedSocket = {
      on: jest.fn(),
      emit: jest.fn(),
      connect: jest.fn(),
      disconnect: jest.fn(),
    };
    const connector = new SocketConnector({eventName: 'some', socket})
    expect(addMessage(message)).toEqual(expectedAction)
  })
});
