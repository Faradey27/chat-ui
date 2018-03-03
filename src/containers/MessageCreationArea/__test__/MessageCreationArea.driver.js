import React from 'react';
import withRedux from './../../../../__test__/helpers/withRedux';
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
        <MessageCreationArea
          user={user}
          onUsernameChange={jest.fn()}
          onMessageAdd={jest.fn()}
          {...props}
        />,
        this.initialStore
      );
      return this;
    },
    messageEntered: (text) => {
      this.get.messageTextArea().simulate('change', {target: {value: text}})
      return this;
    },
    sendMessage: () => {
      this.get.button().simulate('click')
      return this;
    }
  }

  is = {
    ok: () => this.findByDataHook('message-creation-area').length >= 1,
  }

  get = {
    button: () => this.findByDataHook('send-button-el'),
    messageTextArea: () => this.findByDataHook('message-text-field-textarea'),
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageCreationAreaDriver;
