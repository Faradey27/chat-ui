import React from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import MessageListAreaView from './MessageListAreaView';
import { selectMessages } from './../../data/messages/messagesSelectors';

class MessageListArea extends React.Component {
  static propTypes = {
    messages: array, // from store
    user: shape({ // from store
      name: string,
    }),
  }

  render() {
    return (
      <MessageListAreaView
        messages={this.props.messages}
        user={this.props.user}
      />
    );
  }
}

export default connect((state) => ({ messages: selectMessages(state)}))(MessageListArea);
