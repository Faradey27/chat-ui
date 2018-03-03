import React from 'react';
import { mount } from 'enzyme';
import MessageText from './../index';

class MessageTextDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = mount(<MessageText {...props}/>);
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

export default MessageTextDriver;
