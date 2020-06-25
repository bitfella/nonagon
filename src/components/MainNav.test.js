import React from 'react';
import { shallow } from 'enzyme';
import { routes } from 'config/routes';
import { MainNav } from './MainNav';

describe('MainNav Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MainNav />);

    expect(wrapper.length).toEqual(1);
  });

  it('does not show logout button when token prop is null', () => {
    const wrapper = shallow(<MainNav />);

    expect(wrapper.find({ to: routes.logout })).toHaveLength(0);
  });

  it('shows logout button when token prop is valorized', () => {
    const props = { token: 'ACCESS_TOKEN' };
    const wrapper = shallow(<MainNav {...props} />);

    expect(wrapper.find({ to: routes.logout })).toHaveLength(1);
  });
});
