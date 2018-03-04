import { combineReducers } from 'redux';
import messages from './messages/reducers'

const rootReducer = combineReducers({
  messages,
});

export default rootReducer;
