class SocketConnector {
  eventName = '';
  socket = null;

  constructor({eventName, socket}) {
    this.eventName = eventName;
    this.socket = socket;
  }

  connect = () => {
    this.socket.on("connect", () => console.info("connected to chat server!"));
    this.socket.on("disconnect", () => console.info("disconnected to chat server!"));
  }
}
