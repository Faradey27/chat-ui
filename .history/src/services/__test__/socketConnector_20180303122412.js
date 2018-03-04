import SocketConnector from './../SocketConnector';

describe('Messages actions', () => {
  it('should create socket connector and receive message', () => {
    const connector = new SocketConnector({eventName: 'some', socket})
    expect(addMessage(message)).toEqual(expectedAction)
  })
});
