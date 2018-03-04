import { ADD_MESSAGE } from './../messagesActions';
import messagesReducer from './../messagesReducer';

describe('Messages actions', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })
});
