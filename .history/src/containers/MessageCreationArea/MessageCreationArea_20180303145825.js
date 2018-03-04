import React from 'react';
import { shape, string, func, instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import { addMessage } from './../../data/messages/messagesActions';
import SocketConnector from '../../services/SocketConnector';

class MessageCreationArea extends React.Component {
  static propTypes = {
    user: shape({
      name: string,
      avatar: string,
    }),
    onMessageAdd: func.isRequired,
  }

  state = {
    messageText: '',
  }

  handleMessageChange = (messageText) => this.setState({messageText})
  handleUsernameChange = (username) => this.props.onUsernameChange

  handleMessageAdd = () => {
    this.props.onMessageAdd({
      id: uuidv4(),
      text: this.state.messageText,
      date: Date.now(),
      user: {
        name: this.props.user.name,
        avatar: this.props.user.avatar,
      }
    });
  }

  render() {
    return (
      <div data-hook="message-creation-area">
        <MessageCreationAreaView
          onMessageAdd={this.handleMessageAdd}
          onMessageChange={this.handleMessageChange}
          onUsernameChange={this.props.onUsernameChange}
        />
      </div>
    );
  }
}

export default MessageCreationArea;
