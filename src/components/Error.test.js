import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';

describe('Error', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Error />);

    expect(wrapper).toMatchSnapshot();
  });
});
