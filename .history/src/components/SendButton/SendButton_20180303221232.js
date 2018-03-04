import React from 'react';
import { func } from 'prop-types';
import { css } from 'emotion';

const sendButtonStyles = css`
  position: abosolye;
  right: 0;
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
          className={sendButtonStyles}
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
