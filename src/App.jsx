//system imports
import React, { Component } from "react";
import "./App.css";
//import child components
import { CurrentWeather, HourlyWeather, DailyWeather } from "./components";
import { getCurrentWeather } from "./services";
import { weatherModel } from "./models";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: weatherModel
    }
    // this.currDate = new Date();
    // this.timeStr = this.currDate.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
  }

  componentDidMount() {
    getCurrentWeather(50.47, 30.72)
      .then((value) => {
        this.setState({
          weather: value
        });
      });
  }

  render() {
    let hourlyWeather = [];
    let currentDate = new Date();
    let nextDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
    let nextDayStamp = nextDay.getTime();

    for (let i = 0; i < this.state.weather.hourly.length; i++) {
      const element = this.state.weather.hourly[i];
      if (element.dt * 1000 >= nextDayStamp)
        break;
      hourlyWeather.push(<HourlyWeather key={element.dt} forecast={element} />);
    }

    let dailyWeather = [];
    for (let i = 0; i < this.state.weather.daily.length; i++) {
      const element = this.state.weather.daily[i];
      dailyWeather.push(<DailyWeather key={element.dt} forecast={element} />);
    }

    return (
      <div className="App">
        <div className="flex">
          {dailyWeather}
        </div>
        <CurrentWeather currentForecast={this.state.weather.current} />
        <div className="flex">
          {hourlyWeather}
        </div>
      </div>
    );
  }
}

export { App };
