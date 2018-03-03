import React from 'react';
import { mount } from 'enzyme';
import MessageTextField from './../index';

class MessageTextFieldDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = mount(<MessageTextField onMessageChange={jest.fn()} {...props}/>);
      return this;
    },
    typed: (text) => {
      this.get.input().simulate('change', {target: {value: text}})
      return this;
    }
  }

  is = {
    ok: () => this.findByDataHook('message-text-field').length >= 1,
  }

  get = {
    input: () => this.findByDataHook('message-text-field-textarea'),
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageTextFieldDriver;
