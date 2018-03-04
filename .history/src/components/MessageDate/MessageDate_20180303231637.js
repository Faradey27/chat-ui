import React from 'react';
import { number } from 'prop-types';

class MessageDate extends React.Component {
  static propTypes = {
    date: number,
  }

  render() {
    return (
      <span data-hook="message-date">
        {String(this.props.date)}
      </span>
    );
  }
}

export default MessageDate;
