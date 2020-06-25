import React from 'react';
import { shallow } from 'enzyme';
import { Confirmation, greetingsList } from './Confirmation';

const props = {
  images: [],
  uri: 'uri',
  greeting: greetingsList[0]
};

describe('Confirmation', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Confirmation {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
