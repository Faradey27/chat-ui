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
    expect(storage.getItem('magic')).toEqual(value);
  });

  it('should set item and then remove it', () => {
    const mockedStorage = {
      setItem: function(key, value) { this[key] = value},
      getItem: function(key) { return this[key]},
      removeItem: function(key) { return this[key] = ''},
    };
    const storage = new StorageConnector({appName: 'some', storage: mockedStorage});
    storage.setItem('magic', '123');
    expect(storage.getItem('magic')).toBe('123');
    storage.removeItem('magic');
    expect(storage.getItem('magic')).toBe('');
  });

  it('should throw an exception when something went wrong during parsing', () => {
    const mockedStorage = {
      getItem: ()  => '"\'\'"',
    };
    const storage = new StorageConnector({appName: 'some', storage: mockedStorage});
    expect(storage.getItem('magic')).toBe('123');
  });
});
