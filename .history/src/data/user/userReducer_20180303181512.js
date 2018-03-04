import { SET_USER_AVATAR, SET_USER_NAME } from './userActions';

const user = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_AVATAR:
      return {...state, avatar: action.avatar};
    default:
      return state;
  }
};

export default user;
