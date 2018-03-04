import React from 'react';
import { mount } from 'enzyme';
import Message from './../index';

class MessageDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = mount(<Message />);
      return this;
    },
  }

  is = {
    ok: () => this.findByDataHook('message').length >= 1,
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageDriver;
