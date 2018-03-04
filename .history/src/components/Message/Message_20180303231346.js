import React from 'react';
import { string, shape, number } from 'prop-types';
import { css } from 'emotion';
import Avatar from './../Avatar';
import MessageUsername from './../MessageUsername';
import MessageText from './../MessageText';
import MessageDate from './../MessageDate';

const messageStyles = css`
  margin-bottom: 20px;
`;

const col21tyles = css`
  display: flex;
`
const col2Styles = css`
  display: flex;
  flex-direction: column;
  text-align: left;
`

class Message extends React.Component {
  static propTypes = {
    message: shape({
      user: shape({
        name: string,
        avatar: string,
      }).isRequired,
      text: string,
      date: number,
    }),
  }

  render() {
    const { message } = this.props;
    return (
      <div
        className={messageStyles}
        data-hook="message"
      >
        <div className={col1Styles}>
          <Avatar avatar={message.user.avatar}/>
        </div>
        <div className={col2Styles}>
          <MessageUsername username={message.user.name}/>
          <MessageText text={message.text}/>
        </div>
        <MessageDate text={message.date}/>
      </div>
    );
  }
}

export default Message;
