import React from 'react';
import { string } from 'prop-types';
import { css } from 'emotion';
import {grey500} from 'material-ui/styles/colors';

const usernameStyle = css`
  font-size: 15px;
  font-weight: 900;
  color: ${grey900}
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
