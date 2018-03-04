import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from './../../data/messages/messagesActions';

class Chat extends React.Component {
  componentDidMount() {
    this.props.addMessage({});
  }

  render() {
    return (
      <div data-hook="chat">
        {'Here we will have chat'}
      </div>
    );
  }
}

export default connect(null, { addMessage })(Chat);
