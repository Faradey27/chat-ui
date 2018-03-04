import React from 'react';
import { number } from 'prop-types';

class MessageDate extends React.Component {
  static propTypes = {
    date: number,
  }

  render() {
    return (
      <span data-hook="message-date">
        {moment(this.props.date).fromNow()}
      </span>
    );
  }
}

export default MessageDate;
