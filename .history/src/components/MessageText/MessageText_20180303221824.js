import React from 'react';
import { string } from 'prop-types';
import { css } from 'emotion';
import Paper from 'material-ui/Paper';

const messageTextStyles = css`
  display: inline-block;
  min-width: 200px;
`;

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
