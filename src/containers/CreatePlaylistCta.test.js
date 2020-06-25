import React from 'react';
import { shallow } from 'enzyme';
import { CreatePlaylistCta } from './CreatePlaylistCta';

const props = {
  createPlaylist: jest.fn()
};

describe('CreatePlaylistCta', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CreatePlaylistCta {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
