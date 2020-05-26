import React from 'react';
import { shallow } from 'enzyme';

import SolCard from './SolCard';

describe('<SolCard />', () => {
  const props = {
    solNum: '524',
    data: {
      AT: {
        av: 1,
        mn: 0,
        mx: 2
      }
    }
  }

  const solCard = shallow(<SolCard {...props}/>);

  it('renders correctly', () => {
    expect(solCard).toMatchSnapshot();
  });
});