const weatherLocalization = {
  id: 0,
  main: "",
  description: "",
  icon: ""
};

const forecastModel = {
  clouds: 0,
  dew_point: 0.0,
  dt: 0,
  feels_like: 0.0,
  humidity: 0,
  pressure: 0,
  sunrise: 0,
  sunset: 0,
  temp: 0.0,
  uvi: 0.0,
  visibility: 0,
  weather: [weatherLocalization],
  wind_deg: 0,
  wind_speed: 0
}

const forecastDayModel = {
  clouds: 0,
  dew_point: 0.0,
  dt: 0,
  feels_like: {
    day: 0.0,
    eve: 0.0,
    morn: 0.0,
    night: 0.0
  },
  humidity: 0,
  pressure: 0,
  sunrise: 0,
  sunset: 0,
  temp: {
    day: 0.0,
    eve: 0.0,
    max: 0.0,
    min: 0.0,
    morn: 0.0,
    night: 0.0
  },
  uvi: 0.0,
  visibility: 0,
  weather: [weatherLocalization],
  wind_deg: 0,
  wind_speed: 0
}

const forecastHourModel = {
  clouds: 0,
  dew_point: 0.0,
  dt: 0,
  feels_like: 0.0,
  humidity: 0,
  pressure: 0,
  temp: 0.0,
  weather: [weatherLocalization],
  wind_deg: 0,
  wind_speed: 0.0
}

const weatherModel = {
  current: forecastModel,
  lat: 0.0,
  lon: 0.0,
  timezone: "",
  daily: [forecastDayModel],
  hourly: [forecastHourModel]
};

export { weatherModel, forecastModel }