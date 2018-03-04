import React from 'react';
import { string } from 'prop-types';
import Avatar from './../Avatar';
import MessageUsername from './../MessageUsername';
import MessageText from './../MessageText';

class MessageText extends React.Component {
  static propTypes = {
    text: string,
  }

  render() {
    return (
      <div data-hook="message">
        <Avatar src={message.user.avatar}/>
        <MessageUsername username={message.user.name}/>
        <MessageText text={message.text}/>
        <MessageDate text={message.date}/>
      </div>
    );
  }
}

export default MessageText;
