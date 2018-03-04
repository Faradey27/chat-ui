import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from './../../src/data/store/configureStore';
import StorageConnector from './../../src/services/StorageConnector';

const withMaterial = (cleverComponent) => {
  return mount(<MuiThemeProvider>{cleverComponent}</MuiThemeProvider>)
}

export default withMaterial;
