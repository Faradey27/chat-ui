import React from 'react';
import { mount } from 'enzyme';
import MessageText from './../index';

class MessageTextDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = mount(<MessageText onUsernameChange={jest.fn()} {...props}/>);
      return this;
    },
  }

  is = {
    ok: () => this.findByDataHook('message-text').length >= 1,
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageTextDriver;
