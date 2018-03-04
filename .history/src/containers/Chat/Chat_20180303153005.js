import React from 'react';
import { func, instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import { addMessage } from './../../data/messages/messagesActions';
import SocketConnector from '../../services/SocketConnector';
import MessageCreationArea from './../MessageCreationArea';

class Chat extends React.Component {
  static propTypes = {
    socket: instanceOf(SocketConnector).isRequired,
    addMessage: func.isRequired, // dispatched action from react-redux
  }

  componentDidMount() {
    this.props.socket.connect({onMessage: this.props.addMessage})
  }

  render() {
    return (
      <div data-hook="chat">
        <MessageCreationArea />
      </div>
    );
  }
}

export default connect(null, { addMessage })(Chat);
