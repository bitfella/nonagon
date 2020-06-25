import React from 'react';
import { shallow } from 'enzyme';
import SwitchToggler from './SwitchToggler';
import { theme } from 'components/AppStyles';

const props = {
  id: 'id',
  checked: false,
  onChange: jest.fn(),
  theme
};

describe('SwitchToggler', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SwitchToggler {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
