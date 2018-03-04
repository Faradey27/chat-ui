import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './services/pwa/registerServiceWorker';

/*
  Here we have entry point for react app,
  we mount our root component - App on dom node.
*/

ReactDOM.render(<App />, document.getElementById('root'));

/*
  As we want to be PWA app, we need to become offline friendly, for this reason we register service worker
*/
registerServiceWorker();
