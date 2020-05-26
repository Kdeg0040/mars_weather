import React from 'react';
import { shallow } from 'enzyme';

import SolCard from './SolCard';

const solCard = shallow(<SolCard />);

describe('<SolCard />', () => {
  it('renders correctly', () => {
    expect(solCard).toMatchSnapshot();
  });
});