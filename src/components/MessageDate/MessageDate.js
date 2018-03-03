import React from 'react';
import { number } from 'prop-types';
import {grey500} from 'material-ui/styles/colors';

class MessageDate extends React.Component {
  static propTypes = {
    date: number,
  }

  render() {
    const date = new Date(this.props.date);
    return (
      <span
        style={{color: grey500, fontSize: 12}}
        data-hook="message-date"
      >
        {`${date.getHours()}:${date.getMinutes()}`}
      </span>
    );
  }
}

export default MessageDate;
