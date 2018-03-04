import React from 'react';
import Chat from './../index';
import SocketConnector from './../../../services/SocketConnector';
import withRedux from './../../../../__test__/helpers/withRedux';

const socketIO = {
  on: jest.fn(),
  emit: jest.fn(),
};

const eventName = 'some';

class ChatDriver {
  component = null;
  socket = new SocketConnector({eventName, socket: socketIO});

  when = {
    render: (props) => {
      this.component = withRedux(<Chat socket={this.socket} {...props}/>);
      return this;
    }
  }

  is = {
    ok: () => this.findByDataHook('chat').length >= 1,
    socketConnected: () => socketIO.on.mock.calls[0][0] === 'connect'
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default ChatDriver;
