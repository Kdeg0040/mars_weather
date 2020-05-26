import React, {Component} from 'react';

class Weather extends Component {
  constructor() {
    super()

    this.state = {
      apiData: {}
    };
  }

  componentDidMount() {
    const nasaAPI = 'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0'
    this.getWeatherData(nasaAPI);
  }

  getWeatherData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ apiData: data })
  }

  render() {
    const { apiData } = this.state;
    const solKeys = apiData.sol_keys

    if (solKeys === undefined) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          {solKeys.map(sol => <div key={sol}>Sol {sol} : {apiData[sol].AT.av}°C</div>)}
        </div>
      );
    }
  }
}

export default Weather;