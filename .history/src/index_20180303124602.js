import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import io from "socket.io-client";
import Chat from './containers/Chat';
import configureStore from './data/store/configureStore';
import SocketConnector from './services/SocketConnector';
import registerServiceWorker from './services/pwa/registerServiceWorker';

import './index.css';


const socketIO = io("https://spotim-demo-chat-server.herokuapp.com");
const socket = new SocketConnector({eventName: 'spotim/chat', socket: socketIO});

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Chat socket={socket}/>
  </Provider>,
  document.getElementById('root')
);

/*
  As we want to be PWA app, we need to become offline friendly, for this reason we register service worker
*/
registerServiceWorker();
