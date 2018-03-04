import { SET_USER_NAME, SET_USER_AVATAR } from './../messagesActions';
import reducer from './../userReducer';

describe('User reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({user: {avatar: '', name: ''}})
  });

  it('should handle SET_USER_NAME', () => {
    const action = {
      type: SET_USER_NAME,
      name: '123'
    }
    expect(reducer(undefined, action)).toEqual({user: {avatar: '', name: '123'}})
  });

});
