import React from 'react';
import { func, instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import { addMessage } from './../../data/messages/messagesActions';
import SocketConnector from '../../services/SocketConnector';

class MessageCreationArea extends React.Component {
  static propTypes = {
    onMessageAdd: func.isRequired,
  }

  componentDidMount() {
    this.props.socket.connect({onMessage: this.props.addMessage})
  }

  render() {
    return (
      <div data-hook="chat">
        {'Here we will have chat'}
      </div>
    );
  }
}

export default MessageCreationArea;
