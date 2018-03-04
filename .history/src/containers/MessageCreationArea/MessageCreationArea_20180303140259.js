import React from 'react';
import { func, instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import { addMessage } from './../../data/messages/messagesActions';
import SocketConnector from '../../services/SocketConnector';

class MessageCreationArea extends React.Component {
  static propTypes = {
    onMessageAdd: func.isRequired,
  }

  componentDidMount() {

  }

  handleMessageAdd = () => {
    this.props.onMessageAdd({
      id: uuidv4()
    });
  }

  render() {
    return (
      <div data-hook="message-creation-area">
        <MessageCreationAreaView onMessageAdd={this.handleMessageAdd}/>
      </div>
    );
  }
}

export default MessageCreationArea;
