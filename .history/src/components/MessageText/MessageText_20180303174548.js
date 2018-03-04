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
      <span data-hook="message-text">
        {this.props.text}
      </span>
    );
  }
}

export default UsernameTextField;
