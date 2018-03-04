import React from 'react';
import { string, func } from 'prop-types';

class UsernameTextField extends React.Component {
  static propTypes = {
    avatar: string,
    username: string,
    onUsernameChange: func
  }

  render() {
    return (
      <div data-hook="message-creation-area">
        <img
          alt="avatar"
          src={this.props.avatar}
        />
        <input
          value={this.props.username}
          onUsernameChange={this.props.onUsernameChange}
        />
      </div>
    );
  }
}

export default UsernameTextField;
