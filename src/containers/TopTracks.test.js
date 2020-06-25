import React from 'react';
import { shallow } from 'enzyme';
import { TopTracks } from './TopTracks';

const props = {
  token: 'ACCESS_TOKEN',
  tracks: {},
  loading: false,
  error: {},
  fetchTracks: jest.fn()
};

describe('TopTracks', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TopTracks {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
