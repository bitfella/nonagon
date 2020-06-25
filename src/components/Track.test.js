import React from 'react';
import { shallow } from 'enzyme';
import Track from './Track';
import * as utils from 'utils';

describe('Track Component', () => {
  const props = {
    songName: 'Name of the Song',
    artists: [
      {
        id: 1,
        name: 'Name of Artist #1'
      },
      {
        id: 2,
        name: 'Name of Artist #2'
      }
    ],
    uri: 'https://url.of.spotify.song'
  };
  const propsWithImages = {
    ...props,
    images: [
      {
        url: 'https://url.of.first.image'
      },
      {
        url: 'https://url.of.second.image'
      }
    ]
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<Track {...props} />);

    expect(wrapper.length).toEqual(1);
  });

  it('renders role attribute with "link" value if correct props are passed in', () => {
    const wrapper = shallow(<Track {...props} />);

    expect(wrapper.props()['role']).toBe('link');
  });

  it('calls goToURI handler when component is clicked', () => {
    utils.goToURI = jest.fn();
    const wrapper = shallow(<Track {...props} />);

    wrapper.simulate('click');
    expect(utils.goToURI).toHaveBeenCalled();
  });

  it('renders song name if correct props are passed in', () => {
    const wrapper = shallow(<Track {...props} />);

    expect(wrapper.find('[aria-label="song name"]').text()).toBe(
      props.songName
    );
  });

  it('renders artists names if correct props are passed in', () => {
    const wrapper = shallow(<Track {...props} />);

    props.artists.map((artist, i) => {
      expect(
        wrapper
          .find('[aria-label="artist name"]')
          .at(i)
          .text()
      ).toBe(artist.name);
    });
  });

  it('renders alcum cover if props with images are passed in', () => {
    const wrapper = shallow(<Track {...propsWithImages} />);

    expect(wrapper.find('[aria-label="album cover"]')).toHaveLength(1);
  });
});
