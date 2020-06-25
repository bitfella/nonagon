import React from 'react';
import { shallow } from 'enzyme';
import TopTracksActions from './TopTracksActions';

describe('TopTracksActions', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TopTracksActions />);

    expect(wrapper).toMatchSnapshot();
  });
});
