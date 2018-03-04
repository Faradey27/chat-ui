import { ADD_MESSAGE, addMessage } from './../messagesActions';

describe('Messages actions', () => {
  it('should create an action to add a message', () => {
    const message = {
      text: 'Some random text',
      id: '123',
      avatar: 'http://bla.com/img.png',
      username: 'SomeUser',
      date: Date.now(),
    };
    const expectedAction = {
      type: ADD_MESSAGE,
      message
    }
    expect(addMessage(message)).toEqual(expectedAction)
  })
});
