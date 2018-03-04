class SocketConnector {
  appName = '';
  storage = null;

  constructor({appName, storage}) {
    this.appName = appName;
    this.storage = storage;
  }

  setItem(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }
}

export default SocketConnector;
