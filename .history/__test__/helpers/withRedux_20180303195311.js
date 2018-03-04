import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from './../../src/data/store/configureStore';

const withRedux = (cleverComponent, initialStore) => {
  const storage = new StorageConnector({appName: 'chat-ui-user', storage: window.localStorage});
  const store = configureStore(storage);

  return mount(<Provider store={store}>{cleverComponent}</Provider>)
}

export default withRedux;
