import React, { Component } from 'react';
import './weather-component.css';
import { forecastModel } from '../../models'

class Weather extends Component {
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
      <div className="block--weather">
        <p className="label--temperature-main">{tempFormatted}</p>
        <p className="label--temperature-feels-str">Feels like</p>
        <p className="label--temperature-feels">{feelsLikeFormatted}</p>
      </div>
    );
  }
}
export { Weather };
