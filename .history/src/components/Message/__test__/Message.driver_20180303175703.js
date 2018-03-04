import React from 'react';
import { mount } from 'enzyme';
import Message from './../index';

class MessageDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = mount(<Message onUsernameChange={jest.fn()} {...props}/>);
      return this;
    },
  }

  is = {
    ok: () => this.findByDataHook('message-text').length >= 1,
  }

  get = {
    text: () => this.component.text()
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageDriver;
