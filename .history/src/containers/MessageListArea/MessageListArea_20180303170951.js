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
      <div data-hook="message-list-area">
        <MessageListAreaView
        messages={this.props.messages}
        />
      </div>
    );
  }
}

export default MessageListArea;
