import React from 'react';
import MessageTextField from './../index';

class MessageTextFieldDriver {
  component = null;
  socket = new SocketConnector({eventName, socket: socketIO});

  when = {
    render: (props) => {
      this.component = withRedux(<Chat socket={this.socket} {...props}/>);
      return this;
    }
  }

  is = {
    ok: () => this.findByDataHook('message-text-field').length >= 1,
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageTextFieldDriver;
