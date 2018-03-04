import React from 'react';
import { shape, string, func, instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import { addMessage } from './../../data/messages/messagesActions';
import SocketConnector from '../../services/SocketConnector';

class MessageCreationArea extends React.Component {
  static propTypes = {
    avatar: string,
    name: string,
    onMessageAdd: func,
    onMessageChange: func,
    onUsernameChange: func
  }

  render() {
    return (
      <div data-hook="message-creation-area">
        <UsernameTextField
          avatar={this.props.avatar}
          username={this.props.username}
          onUsernameChange={this.props.onUsernameChange}
        />
        <MessageTextField
          name={this.props.name}
          onMessageChange={this.props.onMessageChange}
        />
        <SendButton onClick={this.props.onMessageAdd}/>
      </div>
    );
  }
}

export default MessageCreationArea;
