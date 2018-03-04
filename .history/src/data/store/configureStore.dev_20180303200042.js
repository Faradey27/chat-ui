import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
import saveUserToStorageMiddleware from './../middleware/saveUserToStorage';

const configureStore = (preloadedState, storage) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(createLogger(), saveUserToStorageMiddleware(storage))
  );

  return store;
}

export default configureStore;
