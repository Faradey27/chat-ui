import React from 'react';
import { number } from 'prop-types';
import moment from 'moment';
import {grey500} from 'material-ui/styles/colors';

class MessageDate extends React.Component {
  static propTypes = {
    date: number,
  }

  render() {
    return (
      <span
        style={{color: grey500}}
        data-hook="message-date"
      >
        {moment(this.props.date).format('HH:MM')}
      </span>
    );
  }
}

export default MessageDate;
