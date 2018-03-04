const middleware =  (store, storage) => (next) => (action) => {
  if (action.type === SET_USER_AVATAR || action.type === SET_USER_NAME) {
    console.log('-----', store.user);
    storage.setItem('store.user', store.user);
  }

  return next(action);
}
