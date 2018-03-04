import React from 'react';
import { mount } from 'enzyme';
import MessageListArea from './../index';

class MessageListAreaDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = mount(
        <MessageListArea
          {...props}
        />
      );
      return this;
    },
  }

  is = {
    ok: () => this.findByDataHook('send-button').length >= 1,
  }
}

export default MessageListAreaDriver;
