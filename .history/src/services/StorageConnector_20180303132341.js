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

  getItem(key) {
    try {
      return JSON.parse(this.storage.getItem(key));
    } catch (e) {
      console.error(e);
    }
  }

  removeItem(key) {
    this.storage.removeItem(key);
  }
}

export default SocketConnector;
