import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import io from "socket.io-client";
import Chat from './containers/Chat';
import configureStore from './data/store/configureStore';
import SocketConnector from './services/SocketConnector';
import StorageConnector from './services/StorageConnector';
import registerServiceWorker from './services/pwa/registerServiceWorker';

import './index.css';


const socketIO = io("https://spotim-demo-chat-server.herokuapp.com");
const socket = new SocketConnector({eventName: 'spotim/chat', socket: socketIO});

const storage = new StorageConnector({appName: 'chat-ui-user', storage: window.localStorage}); // localStorage or session storage

const savedUser = storage.getItem('store.user');
const reduxStore = savedUser ? configureStore({user: savedUser}) : configureStore();

ReactDOM.render(
  <Provider store={reduxStore}>
    <Chat socket={socket}/>
  </Provider>,
  document.getElementById('root')
);

/*
  As we want to be PWA app, we need to become offline friendly, for this reason we register service worker
*/
registerServiceWorker();
