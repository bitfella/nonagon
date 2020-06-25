import React from 'react';
import { shallow } from 'enzyme';
import Emoji from './Emoji';

const props = { symbol: '🤘', label: 'rock on' };
let wrapper;

beforeEach(() => {
  wrapper = shallow(<Emoji {...props} />);
});

describe('Emoji Component', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('renders role attribute with "img" value if correct props are passed in', () => {
    expect(wrapper.find('span').props()['role']).toBe('img');
  });

  it('renders aria label attribute if correct props are passed in', () => {
    expect(wrapper.find('span').props()['aria-label']).toBeDefined();
  });
});
