import StorageConnector from './../StorageConnector';

describe('StorageConnector', () => {
  it('should set primitive item and then get it', () => {
    const mockedStorage = {
      setItem: function(key, value) { this[key] = value},
      getItem: function(key) { return this[key]},
    };
    const storage = new StorageConnector({appName: 'some', storage: mockedStorage});
    storage.setItem('magic', '123');
    expect(storage.getItem('magic')).toBe('123');
  });

  it('should set object item and then get it', () => {
    const mockedStorage = {
      setItem: function(key, value) { this[key] = value},
      getItem: function(key) { return this[key]},
    };
    const storage = new StorageConnector({appName: 'some', storage: mockedStorage});
    const value = {user: {id: '123'}};
    storage.setItem('magic', value);
    expect(storage.getItem('magic')).toBe('123');
  });
});
