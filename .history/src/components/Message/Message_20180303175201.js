import React from 'react';
import { string } from 'prop-types';

class MessageText extends React.Component {
  static propTypes = {
    text: string,
  }

  render() {
    return (
      <div data-hook="message">
        {this.props.text}
      </div>
    );
  }
}

export default MessageText;
