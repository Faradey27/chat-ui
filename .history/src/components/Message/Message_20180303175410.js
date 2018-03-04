import React from 'react';
import { string } from 'prop-types';
import Avatar from './../Avatar';
import MessageUsername from './../MessageUsername';
import MessageText from './../MessageText';
import MessageDate from './../MessageDate';

class Message extends React.Component {
  static propTypes = {
    message: shape({
      user: shape({
        name: string,
        avatar: string,
      }),
      text: string,
      date: string,
    }),
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

export default Message;
