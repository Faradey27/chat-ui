import { combineReducers } from 'redux';
import messages from './../messages/messagesReducer';
import user from './../user/userReducer';

const rootReducer = combineReducers({
  messages,
  user,
});

export default rootReducer;
