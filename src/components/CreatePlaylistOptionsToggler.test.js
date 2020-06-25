import React from 'react';
import { shallow } from 'enzyme';
import CreatePlaylistOptionsToggler from './CreatePlaylistOptionsToggler';

const props = {
  onClick: jest.fn()
};

describe('CreatePlaylistOptionsToggler', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CreatePlaylistOptionsToggler {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
