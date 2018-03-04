import React from 'react';
import { func, instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import { css } from 'emotion';
import { addMessage } from './../../data/messages/messagesActions';
import SocketConnector from '../../services/SocketConnector';
import MessageCreationArea from './../MessageCreationArea';
import MessageListArea from './../MessageListArea';
import Column from './../../components/Column';

const columnWrapperStyles = css`
  overflow: hidden;
  display: flex;
  flex: 1;
`;

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
          iconElementLeft={<span/>}
          title="Chat UI"
        />
        <div className={columnWrapperStyles}>
          <Column>
            <MessageListArea />
            <MessageCreationArea onMessageAdd={this.handleMessageAdd}/>
          </Column>
        </div>
      </div>
    );
  }
}

export default connect(null, { addMessage })(Chat);
