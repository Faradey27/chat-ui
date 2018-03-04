import StorageConnector from './../../services/StorageConnector';
const storage = new StorageConnector({storage: window.localStorage});

const middleware =  (store) => (next) => (action) => {
  if (action.type === SET_USER_AVATAR || action.type === SET_USER_NAME) {
    console.log('-----', store.user);
    storage.setItem('store.user', store.user);
  }

  return next(action);
}
