import React from 'react';
import { mount } from 'enzyme';
import SendButton from './../index';

class SendButtonDriver {
  component = null;
  socket = new SocketConnector({eventName, socket: socketIO});

  when = {
    render: (props) => {
      this.component = mount(<SendButton {...props}/>);
      return this;
    },
    clicked: () => {
      this.get.button().simulate('click')
      return this;
    }
  }

  is = {
    ok: () => this.findByDataHook('message-text-field').length >= 1,
    input: () => this.component.find('textarea'),
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default SendButtonDriver;
