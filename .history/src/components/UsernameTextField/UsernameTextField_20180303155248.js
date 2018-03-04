import React from 'react';
import { string, func } from 'prop-types';

class UsernameTextField extends React.Component {
  static propTypes = {
    avatar: string,
    username: string,
    onUsernameChange: func.isRequired
  }

  handleMessageChange = (e) => this.props.onUsernameChange(e.target.value)

  render() {
    return (
      <div data-hook="message-creation-area">
        <img
          alt="avatar"
          src={this.props.avatar}
        />
        <input
          value={this.props.username}
          onChange={this.handleUsernameChange}
        />
      </div>
    );
  }
}

export default UsernameTextField;
