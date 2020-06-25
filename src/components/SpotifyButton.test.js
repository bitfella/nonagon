import React from 'react';
import { shallow } from 'enzyme';
import SpotifyButton from './SpotifyButton';
import { theme } from 'components/AppStyles';

const props = {
  text: 'LOREM IPSUM',
  onClick: jest.fn(),
  theme
};

describe('SpotifyButton', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SpotifyButton {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
