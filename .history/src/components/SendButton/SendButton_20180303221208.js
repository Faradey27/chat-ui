import React from 'react';
import { func } from 'prop-types';
import { css } from 'emotion';

const sendButtonStyles = css`
  order: 1;
  flex-shrink: 0;
`;

class SendButton extends React.Component {
  static propTypes = {
    onClick: func,
  }

  render() {
    return (
      <div
        data-hook="send-button"
      >
        <button
          data-hook="send-button-el"
          onClick={this.props.onClick}
        >
          Send
        </button>
      </div>
    );
  }
}

export default SendButton;
