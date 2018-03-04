import SocketConnector from './../SocketConnector';
import { CHAT_IDENTEFICATOR } from './../../config';

describe('SocketConnector', () => {
  it('should create socket connector', () => {
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
    expect(mockedSocket.on.mock.calls[1][0]).toBe('some');
    expect(mockedSocket.on.mock.calls[2][0]).toBe('disconnect');
  });

  it('should emit message', () => {
    const mockedSocket = {
      on: jest.fn(),
      emit: jest.fn(),
    };
    const onMessage = jest.fn();
    const connector = new SocketConnector({eventName: 'some', socket: mockedSocket});
    connector.connect({onMessage});
    connector.emitMessage({id: '123'});
    expect(mockedSocket.emit).toBeCalledWith('some', {id: '123'})
  });

  it('should call onMessage callback when receiving valid message', () => {
    const message = {
      id: '123',
      text: 'text',
      date: Date.now(),
      user: {
        name: '1',
        avatar: '2',
      },
      identificator: CHAT_IDENTEFICATOR
    }
    const mockedSocket = {
      on: jest.fn(),
      emit: jest.fn(),
    };
    const onMessage = jest.fn();
    const connector = new SocketConnector({eventName: 'some', socket: mockedSocket});
    connector.connect({onMessage});
    const callback = mockedSocket.on.mock.calls[1][1];

    callback(message); // we emulate message receive
    expect(onMessage).toBeCalledWith(message)
  });

  it('should not call onMessage callback when receiving invalid message', () => {
    const message = {
      text: 'text',
      date: Date.now(),
      user: {
        name: '1',
        avatar: '2',
      },
      identificator: CHAT_IDENTEFICATOR
    }
    const mockedSocket = {
      on: jest.fn(),
      emit: jest.fn(),
    };
    const onMessage = jest.fn();
    const connector = new SocketConnector({eventName: 'some', socket: mockedSocket});
    connector.connect({onMessage});
    const callback = mockedSocket.on.mock.calls[1][1];

    callback(message); // we emulate message receive
    expect(onMessage).not.toBeCalled()
  });

  it('should not call onMessage callback when receiving unauthorized message', () => {
    const message = {
      id: '123'
      text: 'text',
      date: Date.now(),
      user: {
        name: '1',
        avatar: '2',
      },
      identificator: 'some_bad_identificator'
    }
    const mockedSocket = {
      on: jest.fn(),
      emit: jest.fn(),
    };
    const onMessage = jest.fn();
    const connector = new SocketConnector({eventName: 'some', socket: mockedSocket});
    connector.connect({onMessage});
    const callback = mockedSocket.on.mock.calls[1][1];

    callback(message); // we emulate message receive
    expect(onMessage).not.toBeCalled()
  });

  it('should be marked as connected, after connection established', () => {
    const mockedSocket = {
      on: jest.fn(),
      emit: jest.fn(),
    };
    const onMessage = jest.fn();
    const connector = new SocketConnector({eventName: 'some', socket: mockedSocket});
    connector.connect({onMessage});
    const callback = mockedSocket.on.mock.calls[0][1];
    expect(connector.connected).toBeFalsy()
    callback(); // we emulate message receive
    expect(connector.connected).toBeTruthy()
  });

  it('should be marked as disconnected, after connection terminated', () => {
    const mockedSocket = {
      on: jest.fn(),
      emit: jest.fn(),
    };
    const onMessage = jest.fn();
    const connector = new SocketConnector({eventName: 'some', socket: mockedSocket});
    connector.connect({onMessage});
    const callbackForConnect = mockedSocket.on.mock.calls[0][1];
    callbackForConnect(); // we emulate message receive
    expect(connector.connected).toBeTruthy()

    const callbackForDissconect = mockedSocket.on.mock.calls[2][1];
    callbackForDissconect(); // we emulate message receive
    expect(connector.connected).toBeFalsy()
  });
});
