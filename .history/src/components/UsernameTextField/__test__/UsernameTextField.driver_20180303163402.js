import React from 'react';
import { mount } from 'enzyme';
import UsernameTextField from './../index';

class UsernameTextFieldDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = mount(<UsernameTextField onUsernameChange={jest.fn()} {...props}/>);
      return this;
    },
    typed: (text) => {
      this.get.input().simulate('change', {target: {value: text}})
      return this;
    }
  }

  is = {
    ok: () => this.findByDataHook('username-text-field').length >= 1,
  }

  get = {
    input: () => this.component.find('input'),
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default UsernameTextFieldDriver;
