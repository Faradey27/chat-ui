import configureStore from 'redux-mock-store';

const withRedux = () => {
  const initialState = {messages: []};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  return mount(<Provider store={store}>{this.props.children}</Provider>)
}

export default withRedux;
