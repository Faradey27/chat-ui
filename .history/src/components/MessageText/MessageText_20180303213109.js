import React from 'react';
import { string } from 'prop-types';
import Paper from 'material-ui/Paper';

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
