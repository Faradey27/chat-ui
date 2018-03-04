import React from 'react';
import { string, shape, number } from 'prop-types';
import { css } from 'emotion';
import Avatar from './../Avatar';
import MessageUsername from './../MessageUsername';
import MessageText from './../MessageText';
import MessageDate from './../MessageDate';

const OWN_MESSAGE_COLOR = '#dbf4fd';
const OTHER_MESSAGE_COLOR = '#f0f4f8';

const messageStyles = css`
  margin-bottom: 25px;
  display: flex;
`;

const col1Styles = css`
  display: flex;
  float: left;
`
const col2Styles = css`
  display: flex;
  flex-direction: column;
  text-align: left;
  float: left;
  margin-left: 10px;
  margin-right: 10px;
  width: 100%;
  border-radius: 10px;
  padding: 6px;
`

const col3Styles = css`
  display: flex;
  float: right;
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
        <div
          className={col2Styles}
          style={{backgroundColor: '#dbf4fd' : 'f0f4f8'}}
        >
          <MessageUsername username={message.user.name}/>
          <MessageText text={message.text}/>
        </div>
        <div className={col3Styles}>
          <MessageDate date={message.date}/>
        </div>
      </div>
    );
  }
}

export default Message;
