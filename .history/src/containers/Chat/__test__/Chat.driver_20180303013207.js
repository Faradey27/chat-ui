import React from 'react';
import { mount } from 'enzyme';
import Chat from './../index';
import withRedux from './../../../../__test__/helpers/withRedux';

class ChatDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = withRedux(<Chat />);
      return this;
    }
  }

  is = {
    ok: () => this.findByDataHook('chat').length >= 1,
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default ChatDriver;
