import React from 'react';
import { shallow } from 'enzyme';
import { Logout } from './Logout';

describe('Logout', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Logout />);

    expect(wrapper).toMatchSnapshot();
  });
});
