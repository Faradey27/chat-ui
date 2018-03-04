import React from 'react';
import { func } from 'prop-types';
import UsernameTextField from './../../components/UsernameTextField';
import MessageTextField from './../../components/MessageTextField';
import SendButton from './../../components/SendButton';

class MessageCreationAreaView extends React.Component {
  static propTypes = {
    onMessageAdd: func,
  }

  render() {
    return (
      <div data-hook="send-button">
        <button onClick={this.props.onMessageAdd}>
      </div>
    );
  }
}

export default MessageCreationAreaView;
