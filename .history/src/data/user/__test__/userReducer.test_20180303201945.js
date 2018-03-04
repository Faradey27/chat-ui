import { SET_USER_NAME, SET_USER_AVATAR } from './../userActions';
import reducer from './../userReducer';

describe('User reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({avatar: '', name: ''})
  });

  it('should handle SET_USER_NAME', () => {
    const action = {
      type: SET_USER_NAME,
      name: '123'
    };
    expect(reducer(undefined, action)).toEqual({avatar: '', name: '123'})
  });

  it('should handle SET_USER_NAME', () => {
    const action = {
      type: SET_USER_AVATAR,
      avatar: '123'
    };
    expect(reducer(undefined, action)).toEqual({avatar: '123', name: ''})
  });
});
