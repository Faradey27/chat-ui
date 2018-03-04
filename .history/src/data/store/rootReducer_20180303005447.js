import { combineReducers } from 'redux';
import messages from './../messages/reducers/messagesReducer';

const rootReducer = combineReducers({
  messages,
});

export default rootReducer;
