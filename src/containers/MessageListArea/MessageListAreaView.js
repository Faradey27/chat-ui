import React from 'react';
import { array } from 'prop-types';
import Message from './../../components/Message';

class MessageListAreaView extends React.Component {
  static propTypes = {
    messages: array,
  }

  render() {
    return (
      <div data-hook="message-list-area">
        {this.props.messages.map((message) => <Message key={message.id} message={message}/>)}
      </div>
    );
  }
}

export default MessageListAreaView;
