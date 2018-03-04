import React from 'react';
import { mount } from 'enzyme';
import MessageDate from './../index';

class MessageDateDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = mount(<MessageDate onUsernameChange={jest.fn()} {...props}/>);
      return this;
    },
  }

  is = {
    ok: () => this.findByDataHook('message-date').length >= 1,
  }

  get = {
    text: () => this.component.text()
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageDateDriver;
