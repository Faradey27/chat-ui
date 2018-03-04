import React from 'react';
import { string } from 'prop-types';

class MessageDate extends React.Component {
  static propTypes = {
    date: string,
  }

  render() {
    return (
      <span data-hook="message-text">
        {this.props.date}
      </span>
    );
  }
}

export default MessageDate;
