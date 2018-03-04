import configureStore from 'redux-mock-store';

const withRedux = (cleverComponent) => {
  const initialState = {messages: []};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  return mount(<Provider store={store}>{cleverComponent}</Provider>)
}

export default withRedux;
