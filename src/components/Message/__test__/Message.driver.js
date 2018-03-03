import React from 'react';
import { mount } from 'enzyme';
import Message from './../index';

class MessageDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = mount(<Message message={{user: {name: '', avatar: ''}}} {...props}/>);
      return this;
    },
  }

  is = {
    ok: () => this.findByDataHook('message').length >= 1,
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageDriver;
