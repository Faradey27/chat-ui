class SocketConnector {
  eventName = '';
  socket = null;
  connected = false;

  constructor({eventName, socket}) {
    this.eventName = eventName;
    this.socket = socket;
  }

  connect = ({onMessage}) => {
    this.socket.on("connect", () => {
      console.info("connected to chat server!");
      this.connected = true;
    });
    this.socket.on(this.eventName, (message) => this.handleMessage);
    this.socket.on("disconnect", () => {
      console.info("disconnected to chat server!");
      this.connected = false;
    });
  }

  emitMessage(message) {
    this.socket.emit(this.eventName, message);
  }
}

export default SocketConnector;
