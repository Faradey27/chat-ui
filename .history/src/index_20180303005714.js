import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './containers/Chat';
import configureStore from './data/store/configureStore';
import registerServiceWorker from './services/pwa/registerServiceWorker';

import './index.css';

/*
  Here we have entry point for react app,
  we mount our root component - App on dom node.
*/

ReactDOM.render(<Chat />, document.getElementById('root'));

/*
  As we want to be PWA app, we need to become offline friendly, for this reason we register service worker
*/
registerServiceWorker();
