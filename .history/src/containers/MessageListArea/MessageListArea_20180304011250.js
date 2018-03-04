import React from 'react';
import { array, shape, string } from 'prop-types';
import { connect } from 'react-redux';
import MessageListAreaView from './MessageListAreaView';
import { selectMessages } from './../../data/messages/messagesSelectors';
import { selectUser } from './../../data/user/userSelectors';

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

export default connect((state) => ({
  messages: selectMessages(state),
  user: selectUser(state)
}))(MessageListArea);
