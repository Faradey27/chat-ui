import React from 'react';
import { array } from 'prop-types';
import { css } from 'emotion';

import Message from './../../components/Message';

const messageListStyles = css`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

class MessageListAreaView extends React.Component {
  static propTypes = {
    messages: array,
  }

  render() {
    return (
      <div
        className={messageListStyles}
        data-hook="message-list-area"
      >
        {this.props.messages.map((message) => <Message key={message.id} message={message}/>)}
      </div>
    );
  }
}

export default MessageListAreaView;
