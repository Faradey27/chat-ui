import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import withRedux from './../../../../__test__/helpers/withRedux';
import { mount } from 'enzyme';
import MessageListArea from './../index';
import MessageListAreaView from './../MessageListAreaView';

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

  emulateDidUpdateOnView = (props) => {
    const componnet = mount(<MessageListAreaView messages={[]}/>);
    component.instance().componentDidUpdate([{}]);
    return thi;
  };

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageListAreaDriver;
