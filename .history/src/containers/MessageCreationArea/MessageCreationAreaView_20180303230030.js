import React from 'react';
import { string, func } from 'prop-types';
import { css } from 'emotion';
import UsernameTextField from './../../components/UsernameTextField';
import MessageTextField from './../../components/MessageTextField';
import SendButton from './../../components/SendButton';

const messageAreaStyles = css`
  background-color: #f8f8f8;
  padding: 20px 25px;
  display: flex;
  align-items: center;
  border-top: 1px solid #f4f4f4;
`;

const messageAreaSendStyles = css`
  position: relative;
  width: 100%;
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
        <form className={messageAreaSendStyles}>
          <MessageTextField
            messageText={this.props.messageText}
            onMessageChange={this.props.onMessageChange}
          />
          <SendButton onClick={this.props.onMessageAdd}/>
        </form>
      </div>
    );
  }
}

export default MessageCreationAreaView;
