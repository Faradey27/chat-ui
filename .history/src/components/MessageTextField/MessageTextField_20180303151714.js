import React from 'react';
import { string, func } from 'prop-types';
import UsernameTextField from './../../components/UsernameTextField';
import MessageTextField from './../../components/MessageTextField';
import SendButton from './../../components/SendButton';

class MessageTextField extends React.Component {
  static propTypes = {
    messageText: string,
    onMessageChange: func,
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

export default MessageTextField;
