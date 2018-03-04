import React from 'react';
import { string, func } from 'prop-types';
import { css } from 'emotion';
import Avatar from './../Avatar';

const usernameStyles = css`
  display: flex;
  align-items: center;
  margin-right: 10px;
  @media (max-width: 570px) {
    margin-bottom: 20px;
  }
`;

const usernameInputStyles = css`
  font-size: 16px;
  border: 2px solid rgba(160,160,162,.7);
  padding: 15px;
  margin-left: 10px;
  outline: none;
  min-width: 120px;
  width: 100%;
`;

class UsernameTextField extends React.Component {
  static propTypes = {
    avatar: string,
    username: string,
    onUsernameChange: func.isRequired
  }

  handleUsernameChange = (e) => this.props.onUsernameChange(e.target.value)

  render() {
    return (
      <div
        className={usernameStyles}
        data-hook="username-text-field"
      >
        <Avatar avatar={this.props.avatar}/>
        <input
          className={usernameInputStyles}
          data-hook="username-text-field-input"
          value={this.props.username}
          onChange={this.handleUsernameChange}
        />
      </div>
    );
  }
}

export default UsernameTextField;
