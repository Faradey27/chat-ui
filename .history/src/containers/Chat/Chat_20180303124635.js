import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { addMessage } from './../../data/messages/messagesActions';
import SocketConnector from '../../services/SocketConnector';

class Chat extends React.Component {
  static propTypes = {
    socket: instanceof(SocketConnector),
    addMessage: func, // dispatched action from react-redux
  }

  render() {
    return (
      <div data-hook="chat">
        {'Here we will have chat'}
      </div>
    );
  }
}

export default connect(null, { addMessage })(Chat);
