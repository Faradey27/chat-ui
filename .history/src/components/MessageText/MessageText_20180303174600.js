import React from 'react';
import { string } from 'prop-types';
import Avatar from './../Avatar';

class MessageText extends React.Component {
  static propTypes = {
    text: string,
  }

  render() {
    return (
      <span data-hook="message-text">
        {this.props.text}
      </span>
    );
  }
}

export default MessageText;
