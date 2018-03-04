import React from 'react';
import { mount } from 'enzyme';
import MessageListArea from './../index';

class MessageListAreaDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = mount(
        <MessageListArea
          user={user}
          onUsernameChange={jest.fn()}
          onMessageAdd={jest.fn()}
          {...props}
        />
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
    ok: () => this.findByDataHook('send-button').length >= 1,
  }

  get = {
    button: () => this.findByDataHook('send-button-el'),
    messageTextArea: () => this.findByDataHook('message-text-field-textarea'),
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageListAreaDriver;
