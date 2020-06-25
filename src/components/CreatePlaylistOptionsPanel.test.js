import React from 'react';
import { shallow } from 'enzyme';
import CreatePlaylistOptionsPanel from './CreatePlaylistOptionsPanel';

describe('CreatePlaylistOptionsPanel', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CreatePlaylistOptionsPanel />);

    expect(wrapper).toMatchSnapshot();
  });
});
