import React from 'react';
import { string, func } from 'prop-types';
import { css } from 'emotion';
import UsernameTextField from './../../components/UsernameTextField';
import MessageTextField from './../../components/MessageTextField';
import SendButton from './../../components/SendButton';

const messageAreaStyles = css`
  background-color: #f8f8f8;
  padding: 25px 30px;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
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

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.onMessageAdd();
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
        <form
          className={messageAreaSendStyles}
          onSubmit={this.handleFormSubmit}
        >
          <MessageTextField
            messageText={this.props.messageText}
            onMessageChange={this.props.onMessageChange}
          />
          <SendButton />
        </form>
      </div>
    );
  }
}

export default MessageCreationAreaView;
