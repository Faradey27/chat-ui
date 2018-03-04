import React from 'react';
import { mount } from 'enzyme';
import Chat from './../index';

class ChatDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = mount(<Chat />);
      return this;
    }
  }

  is = {
    ok: () => this.findByDataHook('chat').length >= 1,
  }

  findByDataHook = (name) => this.component.find(`[data-hook=${name}]`)
}

export default ChatDriver;
