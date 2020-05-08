import React, { Component } from 'react';
import './weather-daily-component.css';
import { forecastModel } from '../../models'

class DailyWeather extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(){
    console.log(this.props);
  }

  render() {
    let forecast = this.props.forecast;
    let date = new Date(forecast.dt * 1000);
    let dateClass = "weather-dialy__label--date";
    let dateFormatted = date.toLocaleDateString(
      "uk-ua", 
      { month: "2-digit", day: "2-digit" });

    let dayFormatted = date.toLocaleDateString("en-us", { weekday: "short" }).toLowerCase();
    if(dayFormatted == "sat" || dayFormatted == "sun"){
      dateClass += " weather-dialy__label--date--offday";
    }
    
    let minTemperatureFormatted = Math.round(forecast.temp.min);
    let maxTemperatureFormatted = Math.round(forecast.temp.max);
    return (
      <div>
        <div className="weather-dialy">
          <p className={dateClass}>{dateFormatted}</p>
          <p className="weather-dialy__label--temperature">
            {minTemperatureFormatted} <span className="celsius">C°</span>
            –
            {maxTemperatureFormatted} <span className="celsius">C°</span>
          </p>
        </div>
      </div>
    );
  }
}

export { DailyWeather };
