import React from 'react';
import { mount } from 'enzyme';

const withMaterial = (cleverComponent) => {
  return mount(<MuiThemeProvider>{cleverComponent}</MuiThemeProvider>)
}

export default withMaterial;
