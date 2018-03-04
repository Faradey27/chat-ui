import middleware from './../saveUserToStorage';

const storage = {
  setItem: jest.fn()
};

const store = {
  getState: jest.fn(() => ({user: {avatar: '', name: ''}})),
  dispatch: jest.fn(),
};

const create = () => {
  const next = jest.fn()

  const invoke = (action) => middleware(storage)(store)(next)(action)

  return {store, next, invoke}
};

describe('Save user middleware', () => {
  it('passes through bad action', () => {
    const { next, invoke } = create();
    const action = {type: 'TEST'};
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  })

  it('save user when SET_USER_AVATAR', () => {
    const { next, invoke } = create();
    const action = {type: 'SET_USER_AVATAR', avatar: '123'};
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
    expect(storage.setItem).toHaveBeenCalledWith("store.user", store.getState().user);
  })
});
