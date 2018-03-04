import React from 'react';
import { addMessage } from './../../data/messages/messagesActions';

class Chat extends React.Component {
  render() {
    return (
      <div data-hook="chat">
        {'Here we will have chat'}
      </div>
    );
  }
}

export default connect(null, { addMessage })(Chat);
