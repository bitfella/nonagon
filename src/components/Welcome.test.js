import React from 'react';
import { shallow } from 'enzyme';
import { Welcome, greetingsList } from './Welcome';
import { theme } from 'components/AppStyles';

const props = {
  greeting: greetingsList[0],
  userId: 'id',
  userImages: [],
  theme
};

describe('Welcome', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Welcome {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
