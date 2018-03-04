import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../index'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
  );

  return store;
}

export default configureStore;
