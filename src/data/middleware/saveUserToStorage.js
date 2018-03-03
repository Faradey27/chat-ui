import { SET_USER_AVATAR, SET_USER_NAME } from './../user/userActions';

const middleware = (storage) => (store) => (next) => (action) => {
  next(action);

  if (action.type === SET_USER_AVATAR || action.type === SET_USER_NAME) {
    storage.setItem('store.user', store.getState().user);
  }
}

export default middleware;
