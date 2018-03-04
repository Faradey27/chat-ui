import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { addMessage } from './../../data/messages/messagesActions';
import SocketConnector from '../../services/SocketConnector';

class Chat extends React.Component {
  static propTypes = {
    socket: instanceof(SocketConnector).isRequired,
    addMessage: func.isRequired, // dispatched action from react-redux
  }

  componentDidMount

  render() {
    return (
      <div data-hook="chat">
        {'Here we will have chat'}
      </div>
    );
  }
}

export default connect(null, { addMessage })(Chat);
