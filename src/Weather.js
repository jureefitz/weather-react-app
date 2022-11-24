import React from 'react'

import "./Weather.css"


export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Tuesday 5:20",
    temperature: 64,
    description: "Partly Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 20,
    wind: 12,
    feelslike: 54
  };
  return (
    <div className="Weather">
      <form className="search-form">
        <div className="row">
          <div className="col-6">
            <input
              className="form-control shadow-sm border-0 w-100"
              type="search"
              placeholder="enter a city.."
              autoComplete="off"
              autoFocus="on"
              required
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              className="btn btn-outline-info shadow-sm"
              value="search"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-outline-info shadow-sm w-100"
              value="current 📍"
            />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <h2>{weatherData.description}</h2>
      Last Searched:
      <h3>{weatherData.date}</h3>
      <div className="row">
        <div className="col-6">
          <img src={weatherData.imgUrl} alt={weatherData.description} />
          <span className="temperature">{weatherData.temperature}</span>
          <span className="units">°F</span>
        </div>

        <div className="col-6">
          <span className="climate">
            Feels Like: <span>{weatherData.feelslike}</span>℉<br />
            Humidity: <span>{weatherData.humidity}</span>% <br />
            Wind: <span>{weatherData.wind}</span> mph
          </span>
        </div>
      </div>
      <div className="weather-forecast"></div>
    </div>
  );
}