import React, {Component} from 'react';

class Weather extends Component {
  constructor() {
    super()

    this.state = {
      error: null,
      isLoaded: false,
      weatherData: {}
    };
  }

  componentDidMount() {
    const nasaAPI = 'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0'
    fetch(nasaAPI)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            weatherData: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, weatherData } = this.state;
    const solKeys = weatherData.sol_keys
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {solKeys.map(sol => <div key={sol}>Sol {sol} : {weatherData[sol].AT.av}°C</div>)}
        </div>
      );
    }
  }
}

export default Weather;