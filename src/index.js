import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Chat from './containers/Chat';
import configureStore from './data/store/configureStore';
import registerServiceWorker from './services/pwa/registerServiceWorker';

import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Chat />
  </Provider>,
  document.getElementById('root')
);

/*
  As we want to be PWA app, we need to become offline friendly, for this reason we register service worker
*/
registerServiceWorker();
