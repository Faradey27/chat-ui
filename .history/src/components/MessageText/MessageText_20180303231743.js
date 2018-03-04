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
      <div
        className={messageTextStyles}
        data-hook="message-text"
      >
        {this.props.text}
      </div>
    );
  }
}

export default MessageText;
