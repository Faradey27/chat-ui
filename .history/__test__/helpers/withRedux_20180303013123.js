import configureStore from 'redux-mock-store';

const withRedux = (component) => {
  const initialState = {messages: []};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  return mount(<Provider store={store}>{component}</Provider>)
}

export default withRedux;
