import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
import saveUserToStorageMiddleware from './../middleware/saveUserToStorage';

const configureStore = preloadedState => {
  const savedUser = storage.getItem('store.user');
  const preloadedState = savedUser ? {user: savedUser} : undefined;

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(createLogger())
  )

  return store;
}

export default configureStore;
