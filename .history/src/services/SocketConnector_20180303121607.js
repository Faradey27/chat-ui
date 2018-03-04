class SocketConnector {
  eventName = '';
  socket = null;

  constructor({eventName, socket}) {
    this.eventName = eventName;
    this.socket = socket;
  }

  connect = (onMessage) => {
    this.socket.on("connect", () => console.info("connected to chat server!"));
    this.socket.on(this.eventName, (message) => onMessage(message));
    this.socket.on("disconnect", () => console.info("disconnected to chat server!"));
  }

  sendMessage(message) {
    this.socket.emit(this.eventName, message);
  }
}
