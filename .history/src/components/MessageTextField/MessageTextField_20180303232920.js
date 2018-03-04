import React from 'react';
import { string, func } from 'prop-types';
import { css } from 'emotion';

const textAreaStyles = css`
  font-size: 16px;
  border: 2px solid rgba(160,160,162,.7);
  width: 100%;
  padding: 15px;
  outline: none;
`;

const textAreaWrapStyles = css`
  display: flex;
`;

class MessageTextField extends React.Component {
  static propTypes = {
    messageText: string,
    onMessageChange: func.isRequired,
  }

  componentDidMount() {
    this.inputNode.focus();
  }

  handleMessageChange = (e) => {
    this.props.onMessageChange(e.target.value);
  }

  render() {
    return (
      <div
        data-hook="message-text-field"
        className={textAreaWrapStyles}
      >
        <input
          ref={(node) => this.inputNode = node}
          data-hook="message-text-field-textarea"
          placeholder="Type something ..."
          className={textAreaStyles}
          value={this.props.messageText}
          onChange={this.handleMessageChange}
        />
      </div>
    );
  }
}

export default MessageTextField;
