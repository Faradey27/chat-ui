import React from 'react';
import { array } from 'prop-types';
import MessageListAreaView from './MessageListAreaView';
import { selectMessages } from './../../data/messages/messagesSelectors';

class MessageListArea extends React.Component {
  static propTypes = {
    messages: array, // from store
  }

  render() {
    return (
      <MessageListAreaView messages={this.props.messages}/>
    );
  }
}

export default connect((state) => ({ messages: selectMessages(state)}))(MessageListArea);
