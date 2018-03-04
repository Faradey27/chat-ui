import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
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
      this.component = withRedux(
        <MuiThemeProvider>
          <MessageListArea
            {...props}
          />
        </MuiThemeProvider>,
        this.initialStore
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

  setProps = (props) => this.component.componentDidUpdate([]);

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageListAreaDriver;
