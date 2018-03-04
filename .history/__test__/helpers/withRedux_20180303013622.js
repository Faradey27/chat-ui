// import React from 'react';
// import { mount } from 'enzyme';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';

// const withRedux = (cleverComponent) => {
//   const initialState = {messages: []};
//   const mockStore = configureStore();
//   const store = mockStore(initialState);

//   return mount(<Provider store={store}>{cleverComponent}</Provider>)
// }

// export default withRedux;

import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from './../../src/data/store/configureStore';

const withRedux = (cleverComponent) => {
  const store = configureStore();

  return mount(<Provider store={store}>{cleverComponent}</Provider>)
}

export default withRedux;
