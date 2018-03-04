import React from 'react';
import { mount } from 'enzyme';
import MessageCreationArea from './../index';

const user = {
  avatar: '',
  name: ''
}

class MessageCreationAreaDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = mount(
        <MessageCreationArea
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

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageCreationAreaDriver;
