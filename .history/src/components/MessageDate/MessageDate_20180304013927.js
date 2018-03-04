import React from 'react';
import { number } from 'prop-types';
import moment from 'moment';
import {grey500} from 'material-ui/styles/colors';

class MessageDate extends React.Component {
  static propTypes = {
    date: number,
  }

  render() {
    console.log(this.props.date);
    return (
      <span
        style={{color: grey500, fontSize: 12}}
        data-hook="message-date"
      >
        {moment.unix(this.props.date).format('HH:MM')}
      </span>
    );
  }
}

export default MessageDate;
