
describe('Chat', () => {
  beforeEach(() => {
    driver = new ChatDriver();
  });

  it('renders without crashing', () => {
    expect(mount(<App />).find('div').length).toEqual(1);
  });
});

