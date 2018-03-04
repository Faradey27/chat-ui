import React from 'react';
import { string, func } from 'prop-types';
import TextField from 'material-ui/TextField';

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
        <TextField
          hintText="Message Field"
          multiLine
          fullWidth
          rows={1}
          value={this.props.messageText}
          onChange={this.handleMessageChange}
        />
        <textarea
          data-hook="message-text-field-textarea"
        />
      </div>
    );
  }
}

export default MessageTextField;
