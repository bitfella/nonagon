import React from 'react';
import { shallow } from 'enzyme';
import { Main } from './Main';

const props = {
  accessToken: 'ACCESS_TOKEN',
  setToken: jest.fn()
};

describe('Main', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Main {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
