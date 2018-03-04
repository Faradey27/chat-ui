import React from 'react';
import { mount } from 'enzyme';
import MessageCreationArea from './../index';

class MessageCreationAreaDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = mount(<MessageCreationArea {...props}/>);
      return this;
    },
  }

  is = {
    ok: () => this.findByDataHook('send-button').length >= 1,
  }

  get = {
    button: () => this.component.find('button'),
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageCreationAreaDriver;
