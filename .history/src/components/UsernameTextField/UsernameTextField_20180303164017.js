import React from 'react';
import { string, func } from 'prop-types';

class UsernameTextField extends React.Component {
  static propTypes = {
    avatar: string,
    username: string,
    onUsernameChange: func.isRequired
  }

  handleUsernameChange = (e) => this.props.onUsernameChange(e.target.value)

  render() {
    return (
      <div data-hook="username-text-field">
        <img
          alt="avatar"
          src={this.props.avatar}
        />
        <input
          data-hook="username-text-field-input"
          value={this.props.username}
          onChange={this.handleUsernameChange}
        />
      </div>
    );
  }
}

export default UsernameTextField;
