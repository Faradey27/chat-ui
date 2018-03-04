class SocketConnector {
  eventName = '';
  socket = null;

  constructor({eventName, socket}) {
    this.eventName = eventName;
    this.socket = socket;
  }

  connect = () => {
    this.socket.on("connect", () => console.info("connected to chat server!"));
    socket.on("disconnect", function() {
      console.log("disconnected from chat server!");
    });
  }
}
