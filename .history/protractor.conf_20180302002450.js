exports.config = {
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome',
  },
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: 'http://localhost:3000',
  specs: ['__test__/**/*.e2e.js'],
  onPrepare() {
    require('babel-register');
    browser.ignoreSynchronization = true; // eslint-disable-line
  },
};
