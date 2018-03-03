import { SET_USER_AVATAR, SET_USER_NAME } from './userActions';

const user = (state = {avatar: '', name: ''}, action) => {
  switch (action.type) {
    case SET_USER_AVATAR:
      return {...state, avatar: action.avatar};
    case SET_USER_NAME:
      return {...state, name: action.name};
    default:
      return state;
  }
};

export default user;
