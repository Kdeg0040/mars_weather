import React from 'react';
import { shallow } from 'enzyme';

import Weather from './Weather';

const weather = shallow(<Weather />);

describe('<Weather />', () => {
  it('renders correctly', () => {
    expect(weather).toMatchSnapshot();
  });
});