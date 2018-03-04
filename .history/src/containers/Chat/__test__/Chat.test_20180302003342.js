
describe('Chat', () => {
  it('renders without crashing', () => {
    expect(mount(<App />).find('div').length).toEqual(1);
  });
});

