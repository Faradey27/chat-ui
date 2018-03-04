const middleware =  (store) => (next) => (action) => {
  if (action.type === SET_USER_AVATAR || action.type === SET_USER_NAME) {
    storage.setItem('store.user', store.user);
  }

  return next(action);
}
