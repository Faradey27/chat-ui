import React from 'react';
import { shape, string, func } from 'prop-types';
import uuidv4 from 'uuid/v4';
import MessageListAreaView from './MessageListAreaView';

class MessageListArea extends React.Component {
  static propTypes = {
    messages: array,
  }

  render() {
    return (
      <div data-hook="message-creation-area">
        <MessageListAreaView
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

export default MessageListArea;
