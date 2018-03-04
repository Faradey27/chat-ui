import { combineReducers } from 'redux';
import messages from './../messages/messagesReducer';

const rootReducer = combineReducers({
  messages,
});

export default rootReducer;
