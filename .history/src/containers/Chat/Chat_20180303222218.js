import React from 'react';
import { func, instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { grey50 } from 'material-ui/styles/colors';
import { addMessage } from './../../data/messages/messagesActions';
import SocketConnector from '../../services/SocketConnector';
import MessageCreationArea from './../MessageCreationArea';
import MessageListArea from './../MessageListArea';
import Column from './../../components/Column';

class Chat extends React.Component {
  static propTypes = {
    socket: instanceOf(SocketConnector).isRequired,
    addMessage: func.isRequired, // dispatched action from react-redux
  }

  componentDidMount() {
    this.props.socket.connect({onMessage: this.props.addMessage})
  }

  handleMessageAdd = (message) => this.props.socket.emitMessage(message)

  render() {
    return (
      <div data-hook="chat">
        <AppBar
          style={{ backgroundColor: grey50 }}
          iconElementLeft={<span/>}
          title="Chat UI"
        />
        <Column>
          <MessageListArea />
          <MessageCreationArea onMessageAdd={this.handleMessageAdd}/>
        </Column>
      </div>
    );
  }
}

export default connect(null, { addMessage })(Chat);
