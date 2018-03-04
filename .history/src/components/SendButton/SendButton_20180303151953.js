import React from 'react';
import { func } from 'prop-types';

class SendButton extends React.Component {
  static propTypes = {
    onMessageAdd: func,
  }

  render() {
    return (
      <div data-hook="send-button">
        <button onClick={this.props.onMessageAdd}>Send</button>
      </div>
    );
  }
}

export default SendButton;
