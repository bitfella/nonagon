import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from './Dashboard';

const props = {
  accessToken: 'ACCESS_TOKEN',
  userId: 'USER_ID',
  userImages: [{}, {}, {}],
  userLoading: false,
  userError: {},
  getUser: jest.fn()
};

describe('Dashboard', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Dashboard {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
