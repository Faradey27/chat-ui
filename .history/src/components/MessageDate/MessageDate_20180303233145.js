import React from 'react';
import { number } from 'prop-types';
import moment from 'moment';

class MessageDate extends React.Component {
  static propTypes = {
    date: number,
  }

  render() {
    return (
      <span data-hook="message-date">
        {moment(this.props.date)}
      </span>
    );
  }
}

export default MessageDate;
