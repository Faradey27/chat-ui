import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from './../../src/data/store/configureStore';
import StorageConnector from './../../src/services/StorageConnector';

export const getStore = (initialStore) => {
  const storage = new StorageConnector({appName: 'chat-ui-user', storage: window.localStorage});
  const store = configureStore(initialStore || undefined, storage);

  return store;
}

const withRedux = (cleverComponent, initialStore) => {
  const storage = new StorageConnector({appName: 'chat-ui-user', storage: window.localStorage});
  const store = configureStore(initialStore || undefined, storage);
  return mount(<Provider store={getStore(initialStore)}>{cleverComponent}</Provider>)
}



export default withRedux;
