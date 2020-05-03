import React, { Component } from 'react';
import './weather-current-component.css';
import { forecastModel } from '../../models'

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  render() {
    let feelsLikeFormatted = 
      Math.round(this.props.currentForecast.feels_like) + " C°";
    let tempFormatted = 
      Math.round(this.props.currentForecast.temp) + " C°";
    return (
      <div className="weather-current">
        <p className="weather-current__label--temperature-main">{tempFormatted}</p>
        <p className="weather-current__label--temperature-feels-str">Feels like</p>
        <p className="weather-current__label--temperature-feels">{feelsLikeFormatted}</p>
      </div>
    );
  }
}
export { CurrentWeather };
