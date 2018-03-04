import React from 'react';
import { string } from 'prop-types';

class MessageUsername extends React.Component {
  static propTypes = {
    username: string,
  }

  render() {
    return (
      <span data-hook="message-username">
        {this.props.username}
      </span>
    );
  }
}

export default MessageUsername;
