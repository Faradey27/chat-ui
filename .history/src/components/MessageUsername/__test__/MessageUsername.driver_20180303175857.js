import React from 'react';
import { mount } from 'enzyme';
import MessageUsername from './../index';

class MessageUsernameDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = mount(<MessageUsername {...props}/>);
      return this;
    },
  }

  is = {
    ok: () => this.findByDataHook('message-username').length >= 1,
  }

  get = {
    text: () => this.component.text()
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageUsernameDriver;
