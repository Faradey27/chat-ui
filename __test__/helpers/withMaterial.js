import React from 'react';
import { mount } from 'enzyme';
import { MuiThemeProvider } from 'material-ui/styles';

const withMaterial = (cleverComponent) => {
  return mount(<MuiThemeProvider>{cleverComponent}</MuiThemeProvider>)
}

export default withMaterial;
