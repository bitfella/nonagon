import React from 'react';
import { shallow } from 'enzyme';
import PlaceholderList from './PlaceholderList';

describe('PlaceholderList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PlaceholderList />);

    expect(wrapper).toMatchSnapshot();
  });
});
