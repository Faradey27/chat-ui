import React from 'react';
import { string } from 'prop-types';

class Avatar extends React.Component {
  static propTypes = {
    src: string,
  }

  render() {
    return (
      <div data-hook="send-button">
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

export default Avatar;
