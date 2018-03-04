import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import Chat from './../index';
import SocketConnector from './../../../services/SocketConnector';
import withRedux, { getStore } from './../../../../__test__/helpers/withRedux';

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
      this.component = withRedux(
        <MuiThemeProvider>
          <Chat socket={this.socket} {...props}/>
        </MuiThemeProvider>
      );
      return this;
    },
    messageEntered: (text) => {
      this.get.messageTextArea().simulate('change', {target: {value: text}})
      return this;
    },
    nameEntered: (text) => {
      this.get.usernameInput().simulate('change', {target: {value: text}})
      return this;
    },
    sendMessage: () => {
      this.get.form().simulate('submit')
      return this;
    }
  }

  is = {
    ok: () => this.findByDataHook('chat').length >= 1,
    socketConnected: () => socketIO.on.mock.calls[0][0] === 'connect'
  }

  get = {
    snapshot: () => renderer.create(
        <MuiThemeProvider>
          <Provider store={getStore(initialStore)}>
            <Chat socket={this.socket}/>
          </Provider>
        </MuiThemeProvider>
    ).toJSON(),

    emitMockedFunc: () => socketIO.emit,
    form: () => this.component.find('form'),
    messageTextArea: () => this.findByDataHook('message-text-field-textarea'),
    usernameInput: () => this.findByDataHook('username-text-field-input'),
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default ChatDriver;
