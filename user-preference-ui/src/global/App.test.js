import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

test('renders react app', () => {
  const app = shallow(<App />);
  expect(app).toMatchSnapshot();
});
