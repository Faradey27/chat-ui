import React from 'react';
import { mount } from 'enzyme';
import SendButton from './../index';

class SendButtonDriver {
  component = null;

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
    button: () => this.component.find('button'),
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default SendButtonDriver;
