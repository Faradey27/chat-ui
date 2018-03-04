import { SET_USER_NAME, SET_USER_AVATAR } from './../messagesActions';
import reducer from './../userReducer';

describe('User reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({user: {avatar: '', name: ''}})
  });

  it('should handle SET_USER_NAME for empty store', () => {
    const action = {
      type: ADD_MESSAGE,
      message: {
        text: 'Some random text',
        id: '123',
        avatar: 'http://bla.com/img.png',
        username: 'SomeUser',
        date: Date.now(),
      }
    }
    expect(reducer([], action)).toEqual([action.message])
  });

});
