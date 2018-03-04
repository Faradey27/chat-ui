class SocketConnector {
  appName = '';
  storage = null;

  constructor({appName, storage}) {
    this.appName = appName;
    this.storage = storage;
  }

  _getMaskedKey = (key) => `${this.appName}-${key}`;

  setItem(key, value) {
    this.storage.setItem(this._getMaskedKey(key), JSON.stringify(value));
  }

  getItem(key) {
    try {
      return JSON.parse(this.storage.getItem(this._getMaskedKey(key)));
    } catch (e) {
      console.error(e);
    }
  }

  removeItem(key) {
    this.storage.removeItem(key);
  }
}

export default SocketConnector;
