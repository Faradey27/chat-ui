import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from './../../src/data/store/configureStore';

const withRedux = (cleverComponent) => {
  const store = configureStore();

  return mount(<Provider store={store}>{cleverComponent}</Provider>)
}

export default withRedux;
