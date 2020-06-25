import React from 'react';
import { shallow } from 'enzyme';
import PlaceholderItem from './PlaceholderItem';

describe('PlaceholderItem', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<PlaceholderItem />);

    expect(wrapper).toMatchSnapshot();
  });
});
