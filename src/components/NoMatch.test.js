import React from 'react';
import { shallow } from 'enzyme';
import NoMatch from './NoMatch';

describe('NoMatch', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NoMatch />);

    expect(wrapper).toMatchSnapshot();
  });
});
