import React from 'react';
import Avatar from 'material-ui/Avatar';

export default ({avatar}) => (
  <div data-hook="avatar">
    <Avatar src={avatar}/>
  </div>
);
