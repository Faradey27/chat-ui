import middleware from './../saveUserToStorage';

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn()

  const invoke = (action) => thunk(store)(next)(action)

  return {store, next, invoke}
};

describe('Save user middleware', () => {
  it('passes through bad action', () => {
    const { next, invoke } = create()
    const action = {type: 'TEST'}
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
  })
});
