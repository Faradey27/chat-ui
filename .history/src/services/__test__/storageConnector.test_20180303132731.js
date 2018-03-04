import StorageConnector from './../StorageConnector';

describe('StorageConnector', () => {
  it('should set item and then get it', () => {
    const mockedStorage = {
      setItem: function(key, value) { this[key] = value},
      getItem: function(key) { return this[key]},
    };
    const connector = new StorageConnector({appName: 'some', storage: mockedStorage});

  });
});
