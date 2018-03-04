import React from 'react';
import withMaterial from './../../../../__test__/helpers/withMaterial';
import withRedux from './../../../../__test__/helpers/withRedux';
import MessageListArea from './../index';

class MessageListAreaDriver {
  component = null;
  initialStore = null;

  given = {
    initialStore: (store) => this.initialStore = store,
  }

  when = {
    render: (props) => {
      this.component = withMaterial(
        withRedux(
          <MessageListArea
            {...props}
          />,
        this.initialStore
        ),
      );
      return this;
    },
  }

  is = {
    ok: () => this.findByDataHook('message-list-area').length >= 1,
  }

  get = {
    text: () => this.component.text()
  }

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageListAreaDriver;
