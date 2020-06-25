import React from 'react';
import { shallow } from 'enzyme';
import Callback from './Callback';

describe('Callback', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Callback />);

    expect(wrapper).toMatchSnapshot();
  });
});
