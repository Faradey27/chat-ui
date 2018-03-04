import { SET_USER_AVATAR, SET_USER_NAME, setUserAvatar, setUsername } from './../userActions';

describe('User actions', () => {
  it('should create an action to set user name', () => {
    const expectedAction = {
      type: SET_USER_NAME,
      name: '123'
    }
    expect(setUsername('123')).toEqual(expectedAction)
  });

  it('should create an action to set user avatar', () => {
    const expectedAction = {
      type: SET_USER_AVATAR,
      avatar: '123'
    }
    expect(setUserAvatar('123')).toEqual(expectedAction)
  })
});
