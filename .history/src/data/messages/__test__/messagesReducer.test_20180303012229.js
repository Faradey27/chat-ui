import { ADD_MESSAGE } from './../messagesActions';
import messagesReducer from './../messagesReducer';

describe('Messages actions', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  });

  it('should handle ADD_MESSAGE for empty store', () => {
    const action = {
      type: types.ADD_MESSAGE,
      message: {
        text: 'Some random text',
        id: '123',
        avatar: 'http://bla.com/img.png',
        username: 'SomeUser',
        date: Date.now(),
      };
    }
    expect(reducer([], action)).toEqual([action.message])
  });

  it('should handle ADD_MESSAGE for not empty store', () => {
    const action = {
      type: types.ADD_MESSAGE,
      message: {
        text: 'Some random text',
        id: '123',
        avatar: 'http://bla.com/img.png',
        username: 'SomeUser',
        date: Date.now(),
      };
    }
    expect(reducer([{id: '123'}], action)).toEqual([{id: '123'}, action.message])
  })
});
