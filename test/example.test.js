import { shallow } from 'enzyme';
import React from 'react';
import App from '../src/app.js';

describe('With Enzyme', () => {
  it('App shows "Hello world"', () => {
    const app = shallow(<App />);
    expect(app.find('h1').text()).toEqual('Hello11');
  });
});
