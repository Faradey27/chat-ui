import io from "socket.io-client";

class SocketConnector {
  eventName = '';

  constructor({eventName, socket}) {
    this.eventName = eventName;
    this.socket = socket
  }

  connect = () => {
    socket.on("connect", function() {
      console.log("connected to chat server!");
    })
  }
}
