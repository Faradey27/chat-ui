import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from './rootReducer'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
  );

  return store;
}

export default configureStore;
