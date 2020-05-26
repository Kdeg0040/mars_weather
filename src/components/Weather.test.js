import React from 'react';
import { shallow } from 'enzyme';

import Weather from './Weather';

const weather = shallow(<Weather />);

describe('<Weather />', () => {
  it('renders correctly', () => {
    expect(weather).toMatchSnapshot();
  });

  describe('when the page loads', () => {
    const apiUrl = 'https://testAPI.com'
    const mockSuccessResponse = {
      "524": { "AT": { 'av': 1 } },
      "525": { "AT": { 'av': 2 } },
      "sol_keys": ["524", "525"]
    }
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    it('retrieves mars weather data', (done) => {
      weather.instance().getWeatherData(apiUrl);

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(apiUrl);

      process.nextTick(() => {
        const responseDataIsEmpty = Object.keys(weather.state().apiData).length === 0;
        expect(responseDataIsEmpty).toEqual(false);
      });

      global.fetch.mockClear();
      done();
    })
  })
});