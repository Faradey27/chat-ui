import React from 'react';
import { mount } from 'enzyme';
import MessageListArea from './../index';
import withRedux from './../../../../__test__/helpers/withRedux';

class MessageListAreaDriver {
  component = null;

  when = {
    render: (props) => {
      this.component = withRedux(
        <MessageListArea
          {...props}
        />
      );
      return this;
    },
  }

  is = {
    ok: () => this.findByDataHook('message-list-area').length >= 1,
  }
}

export default MessageListAreaDriver;
