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
    this.props.onMessageAdd({id: '123'});
  }

  render() {
    return (
      <div data-hook="message-creation-area">
        {'Here we will have textarea'}
      </div>
    );
  }
}

export default MessageCreationArea;
