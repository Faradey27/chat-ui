import React from 'react';
import { string, func } from 'prop-types';
import { css } from 'emotion';
import UsernameTextField from './../../components/UsernameTextField';
import MessageTextField from './../../components/MessageTextField';
import SendButton from './../../components/SendButton';

const messageAreaStyles = css`
  order: 1;
  flex-shrink: 0;
`;

const messageAreaSendStyles = css`
  position: relative;
  margin: 20px 0;
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
        <div className={messageAreaSendStyles}>
          <MessageTextField
            messageText={this.props.messageText}
            onMessageChange={this.props.onMessageChange}
          />
          <SendButton onClick={this.props.onMessageAdd}/>
        </div>
        <UsernameTextField
          avatar={this.props.avatar}
          username={this.props.username}
          onUsernameChange={this.props.onUsernameChange}
        />
      </div>
    );
  }
}

export default MessageCreationAreaView;
