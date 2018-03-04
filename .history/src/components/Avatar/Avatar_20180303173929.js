import React from 'react';
import { string } from 'prop-types';

class Avatar extends React.Component {
  static propTypes = {
    src: string,
  }

  render() {
    return (
      <img alt="avatar" src={this.props.avatar}>
    );
  }
}

export default Avatar;
