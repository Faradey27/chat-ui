import React from 'react';
import { string, func } from 'prop-types';
import { css } from 'emotion';
import UsernameTextField from './../../components/UsernameTextField';
import MessageTextField from './../../components/MessageTextField';
import SendButton from './../../components/SendButton';

const messageAreaStyles = css`
  flex: 1;
  display: flex;
`;

class MessageCreationAreaView extends React.Component {
  static propTypes = {
    avatar: string,
    username: string,
    onMessageAdd: func,
    onMessageChange: func,
    onUsernameChange: func
  }

  render() {
    return (
      <div
        className={messageAreaStyles}
        data-hook="message-creation-area"
      >
        <UsernameTextField
          avatar={this.props.avatar}
          username={this.props.username}
          onUsernameChange={this.props.onUsernameChange}
        />
        <MessageTextField
          messageText={this.props.messageText}
          onMessageChange={this.props.onMessageChange}
        />
        <SendButton onClick={this.props.onMessageAdd}/>
      </div>
    );
  }
}

export default MessageCreationAreaView;
