import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './Avatar';

const props = {
  src: 'https://www.google.it'
};

describe('Avatar', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Avatar {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
