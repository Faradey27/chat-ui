import React from 'react';
import { string } from 'prop-types';

class MessageText extends React.Component {
  static propTypes = {
    text: string,
  }

  render() {
    return (
      <div data-hook="message-text">
        <Paper>
          {this.props.text}
        </Paper>
      </div>
    );
  }
}

export default MessageText;
