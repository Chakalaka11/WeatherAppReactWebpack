import React, { Component } from 'react';
import './weather-hourly-component.css';
import { forecastModel } from '../../models'

class HourlyWeather extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(){
    console.log(this.props);
  }

  render() {
    let date = new Date(this.props.forecast.dt * 1000);
    let timeFormatted = date.toLocaleTimeString("uk-ua", { hour: "2-digit", minute: "2-digit" });
    let temperatureFormatted = Math.round(this.props.forecast.temp);
    return (
      <div>
        <div className="weather-hourly">
          <p className="weather-hourly__label--time">{timeFormatted}</p>
          <p className="weather-hourly__label--temperature">
            {temperatureFormatted} <span className="celsius">C°</span>
          </p>
        </div>
      </div>
    );
  }
}

export { HourlyWeather };
