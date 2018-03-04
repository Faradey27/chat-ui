class SocketConnector {
  eventName = '';
  socket = null;

  constructor({eventName, socket}) {
    this.eventName = eventName;
    this.socket = socket;
  }

  connect = () => {
    socket.on("connect", function() {
      console.log("connected to chat server!");
    })
  }
}
