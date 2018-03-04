import React from 'react';
import { array } from 'prop-types';
import MessageListAreaView from './MessageListAreaView';

class MessageListArea extends React.Component {
  static propTypes = {
    messages: array,
  }

  render() {
    return (
      <div data-hook="message-list-area">
        <MessageListAreaView messages={this.props.messages}/>
      </div>
    );
  }
}

export default connect((state) => ({ messages: selectMessages(state)}))(MessageListArea);
