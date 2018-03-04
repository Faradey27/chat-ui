import React from 'react';
import withRedux from './../../../../__test__/helpers/withRedux';
import { MuiThemeProvider } from 'material-ui/styles';
import MessageCreationArea from './../index';

const user = {
  avatar: '',
  name: ''
}

class MessageCreationAreaDriver {
  component = null;

  given = {
    initialStore: (store) => this.initialStore = store,
  }

  when = {
    render: (props) => {
      this.component = withRedux(
        <MuiThemeProvider>
          <MessageCreationArea
            user={user}
            onUsernameChange={jest.fn()}
            onMessageAdd={jest.fn()}
            {...props}
          />
        </MuiThemeProvider>,
        this.initialStore
      );
      return this;
    },
    messageEntered: (text) => {
      this.get.messageTextArea().simulate('change', {target: {value: text}})
      return this;
    },
    sendMessage: () => {
      this.get.form().simulate('submit')
      return this;
    }
  }

  is = {
    ok: () => this.findByDataHook('message-creation-area').length >= 1,
  }

  get = {
    form: () => this.component.find('form'),
    messageTextArea: () => this.findByDataHook('message-text-field-textarea'),
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageCreationAreaDriver;
