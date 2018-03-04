import React from 'react';
import { func } from 'prop-types';
import { css } from 'emotion';

const sendButtonStyles = css`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 0;
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
          type="submit"
          className={sendButtonStyles}
          data-hook="send-button-el"
          onClick={this.props.onClick}
        >
          <svg
            height="24"
            width="24"
            viewBox="0 0 48 48"
          >
            <path d="M4.02 42l41.98-18-41.98-18-.02 14 30 4-30 4z"/>
            <path d="M0 0h48v48h-48z" fill="none"/>
          </svg>
        </button>
      </div>
    );
  }
}

export default SendButton;
