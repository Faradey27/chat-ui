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

  emulateDidUpdateOnViewAndGetScrollCallback = (props) => {
    const scrollTo = jest.fn();
    const component = mount(<MessageListAreaView messages={[]}/>);
    component.instance().listNode = {scrollTo};
    component.instance().componentDidUpdate({messages: [{id: '123'}]});
    return scrollTo;
  };

  findByDataHook = (name) => this.component.find(`[data-hook='${name}']`)
}

export default MessageListAreaDriver;
