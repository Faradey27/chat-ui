import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  expect(mount(<App />).find('div').length).toEqual(1);
});
