import React from 'react';
import { array } from 'prop-types';
import { css } from 'emotion';

import Message from './../../components/Message';

const messageListStyles = css`
  height: 100%;
  overflow-y: auto;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
`;

const emptyStyle = css`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  flex-wrap: wrap;
`;

const emptyMessageStyle = css`
  font-size: 15px;
`;

class MessageListAreaView extends React.Component {
  static propTypes = {
    messages: array,
  }

  renderMessages() {
    if (!this.props.messages.length) {
      return (
        <div className={emptyStyle}>
          <div style={{textAlign: 'center'}}>
            <p>No messages</p>
            <p className={emptyMessageStyle}>Try to type and send something</p>
          </div>
        </div>
      );
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
