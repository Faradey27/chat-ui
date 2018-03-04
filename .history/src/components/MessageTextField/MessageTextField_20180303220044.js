import React from 'react';
import { string, func } from 'prop-types';
import TextField from 'material-ui/TextField';
import { css } from 'emotion';

const textAreaStyles = css`
  font-size: 16px;
  border: 2px solid rgba(160,160,162,.7);
  width: 100%;
  padding: 9px;
`;

class MessageTextField extends React.Component {
  static propTypes = {
    messageText: string,
    onMessageChange: func.isRequired,
  }

  handleMessageChange = (e) => {
    this.props.onMessageChange(e.target.value);
  }

  render() {
    return (
      <div data-hook="message-text-field">
        <input
          data-hook="message-text-field-textarea"
          placeholder="Enter your message here"
          className={textAreaStyles}
          value={this.props.messageText}
          onChange={this.handleMessageChange}
        />
      </div>
    );
  }
}

export default MessageTextField;
