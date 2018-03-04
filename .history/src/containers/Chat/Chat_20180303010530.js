import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from './../../data/messages/messagesActions';

class Chat extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div data-hook="chat">
        {'Here we will have chat'}
      </div>
    );
  }
}

export default connect(null, { addMessage })(Chat);
