import React from 'react';
import { string } from 'prop-types';
import { css } from 'emotion';
import {grey500} from 'material-ui/styles/colors';

const usernameStyle = css`
  font-size: 11px;
  color: ${grey500}
`;

class MessageUsername extends React.Component {
  static propTypes = {
    username: string,
  }

  render() {
    return (
      <span
        className={usernameStyle}
        data-hook="message-username"
      >
        {this.props.username}
      </span>
    );
  }
}

export default MessageUsername;
