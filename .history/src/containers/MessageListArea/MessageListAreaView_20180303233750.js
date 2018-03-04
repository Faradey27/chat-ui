import React from 'react';
import { array } from 'prop-types';
import { css } from 'emotion';

import Message from './../../components/Message';

const messageListStyles = css`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  margin-top: 30px;
  margin-left: 30px;
  margin-right: 30px;
`;

class MessageListAreaView extends React.Component {
  static propTypes = {
    messages: array,
  }

  renderMessages() {
    if (!this.props.messages.length) {
      return <span>No messages</span>
    }

    return this.props.messages.map((message) => <Message key={message.id} message={message}/>);
  }

  render() {
    return (
      <div
        className={messageListStyles}
        data-hook="message-list-area"
      >
        {this.renderMessages()}
      </div>
    );
  }
}

export default MessageListAreaView;
