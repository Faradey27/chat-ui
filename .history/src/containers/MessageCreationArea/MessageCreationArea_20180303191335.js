import React from 'react';
import { shape, string, func } from 'prop-types';
import uuidv4 from 'uuid/v4';
import { connect } from 'react-redux';
import { selectUser } from './../../data/user/userSelectors';
import { setUserAvatar, setUsername } from './../../data/user/userActions';
import MessageCreationAreaView from './MessageCreationAreaView';
import { CHAT_IDENTEFICATOR } from './../../config';
import avatars from './../../assets/avatars';

const getRandomAvatar = () => avatars[Math.floor(Math.random() * avatars.length)]

class MessageCreationArea extends React.Component {
  static propTypes = {
    user: shape({ // from redux store
      name: string,
      avatar: string,
    }),
    setUserAvatar: func, // redux action
    setUsername: func, // redux action
    onMessageAdd: func.isRequired,
  }

  state = {
    messageText: '',
  }

  componentDidMount() {
    this.props.setUserAvatar(getRandomAvatar());
  }

  handleMessageChange = (messageText) => this.setState({messageText})

  handleMessageAdd = () => {
    this.props.onMessageAdd({
      id: uuidv4(),
      text: this.state.messageText,
      date: Date.now(),
      user: {
        name: this.props.user.name,
        avatar: this.props.user.avatar,
      },
      identificator: CHAT_IDENTEFICATOR
    });

    this.resetMessage();
  }

  resetMessage = () => this.handleMessageChange('')

  render() {
    console.log(this.props.user);
    return (
      <MessageCreationAreaView
        avatar={this.props.user.avatar}
        username={this.props.user.name}
        messageText={this.state.messageText}
        onMessageAdd={this.handleMessageAdd}
        onMessageChange={this.handleMessageChange}
        onUsernameChange={this.props.setUsername}
      />
    );
  }
}

export default connect(
  (state) => ({
    user: selectUser(state)
  }),
  { setUsername, setUserAvatar }
)(MessageCreationArea);

