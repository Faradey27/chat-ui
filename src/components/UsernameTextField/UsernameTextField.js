import React from 'react';
import { string, func } from 'prop-types';
import Avatar from './../Avatar';

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
        <Avatar avatar={this.props.avatar}/>
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
