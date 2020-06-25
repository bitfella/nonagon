import React from 'react';
import { shallow } from 'enzyme';
import { Tastes } from './Tastes';
import { spotifyWebApiTimeRanges as timeRanges } from 'config/spotify';

const props = {
  token: 'ACCESS_TOKEN',
  timeRange: timeRanges[0]
};

describe('Tastes', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Tastes {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
