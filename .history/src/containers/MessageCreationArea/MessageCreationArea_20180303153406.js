import React from 'react';
import { shape, string, func } from 'prop-types';
import uuidv4 from 'uuid/v4';
import { addMessage } from './../../data/messages/messagesActions';
import SocketConnector from '../../services/SocketConnector';
import MessageCreationAreaView from './MessageCreationAreaView';

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
          avatar={this.props.user.avatar}
          messageText={this.state.messageText}
          username={this.props.user.name}
          onMessageAdd={this.handleMessageAdd}
          onMessageChange={this.handleMessageChange}
          onUsernameChange={this.props.onUsernameChange}
        />
      </div>
    );
  }
}

export default MessageCreationArea;
