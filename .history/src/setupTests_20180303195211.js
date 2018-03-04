/*
  DEV ONLY FILE
  This file will be used by our test runner to setup enzyme
  https://github.com/facebook/create-react-app/blob/779dad55465de81972ec72257c734e4afae17094/packages/react-scripts/template/README.md#testing-components
*/

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

window.localStorage = {
  setItem: function(key, value) {
    this[key] = value;
  },
  getItem: function(key, value) {
    return this[key];
  },
};
