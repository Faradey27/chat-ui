import { SET_USER_AVATAR, SET_USER_NAME, setUserAvatar, setUsername } from './../messagesActions';

describe('User actions', () => {
  it('should create an action to set user avatar', () => {
    const expectedAction = {
      type: SET_USER_NAME,
      name: '123'
    }
    expect(setUsername('123')).toEqual(expectedAction)
  })
});
