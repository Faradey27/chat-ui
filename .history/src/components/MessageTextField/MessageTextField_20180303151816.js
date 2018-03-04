import React from 'react';
import { string, func } from 'prop-types';

class MessageTextField extends React.Component {
  static propTypes = {
    messageText: string,
    onMessageChange: func.isRequired,
  }

  handleMessageChange = (e) => {
    this.props.onMessageChange(e.target.value)
  }

  render() {
    return (
      <div data-hook="message-text">
        <textarea onChange={this.handleMessageChange}/>
      </div>
    );
  }
}

export default MessageTextField;
