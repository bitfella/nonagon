import React from 'react';
import { shallow } from 'enzyme';
import { CreatePlaylistOptionsList } from './CreatePlaylistOptionsList';

const props = {
  isPlaylistPublic: false,
  setPlaylistAvailability: jest.fn(),
  setRecommendationsDanceability: jest.fn(),
  setRecommendationsEnergy: jest.fn(),
  setRecommendationsValence: jest.fn()
};

describe('CreatePlaylistOptionsList', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CreatePlaylistOptionsList {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
