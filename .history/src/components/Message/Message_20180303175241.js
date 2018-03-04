import React from 'react';
import { string } from 'prop-types';

class MessageText extends React.Component {
  static propTypes = {
    text: string,
  }

  render() {
    return (
      <div data-hook="message">
        <Avatar src={message.user.avatar}/>
      </div>
    );
  }
}

export default MessageText;
