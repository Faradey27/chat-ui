import React from 'react';
import { string, func } from 'prop-types';
import UsernameTextField from './../../components/UsernameTextField';
import MessageTextField from './../../components/MessageTextField';
import SendButton from './../../components/SendButton';

class UsernameTextField extends React.Component {
  static propTypes = {
    avatar: string,
    username: string,
    onUsernameChange: func
  }

  render() {
    return (
      <div data-hook="message-creation-area">
        <img src={avatar} />
        <input
          value={this.props.username}
          onUsernameChange={this.props.onUsernameChange}
        />
      </div>
    );
  }
}

export default UsernameTextField;
