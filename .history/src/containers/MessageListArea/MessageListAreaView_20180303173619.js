import React from 'react';
import { string, func } from 'prop-types';
import UsernameTextField from './../../components/UsernameTextField';
import MessageTextField from './../../components/MessageTextField';
import SendButton from './../../components/SendButton';

class MessageCreationAreaView extends React.Component {
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

export default MessageCreationAreaView;
