import React from 'react';
import { string } from 'prop-types';
import { css } from 'emotion';

const messageTextStyles = css`
  display: inline-block;
  min-width: 200px;
  font-weight: 300;
  font-size: 16;
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
