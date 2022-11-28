import React, { useState } from 'react'
import axios from 'axios';
import "./Weather.css"
import FormattedDate from './FormattedDate';



export default function Weather(props) {
  const [weatherData, setWeatherData] = useState ({ ready : false})
  
  function handleResponse(response){
  
    setWeatherData({
    ready : true,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    temperature: response.data.main.temp,
    description: response.data.weather[0].main,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    feelslike: response.data.main.feels_like
  })
    
  
  };
  if (weatherData.ready){
  return (
    <div className="Weather">
      <form className="search-form">
        <div className="row">
          <div className="col-6">
            <input
              className="form-control shadow-sm border-0 w-100 city-input"
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
              className="btn btn-outline-info shadow-sm search-button"
              value="search"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-outline-info shadow-sm w-100 location-button"
              value="current 📍"
            />
          </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <h2>{weatherData.description}</h2>
      Last Searched:
      <h3 className="date-time"><FormattedDate date={weatherData.date}/></h3>
      <div className="row">
        <div className="col-6">
          <img src={weatherData.imgUrl} alt={weatherData.description} />
          <span className="temperature">{Math.round(weatherData.temperature)}</span>
          <span className="units">°F</span>
        </div>

        <div className="col-6">
          <span className="climate">
            Feels Like: <span>{Math.round(weatherData.feelslike)}</span>℉<br />
            Humidity: <span>{Math.round(weatherData.humidity)}</span>% <br />
            Wind: <span>{Math.round(weatherData.wind)}</span> mph
          </span>
        </div>
      </div>
      <div className="weather-forecast"></div>
      
    </div>

  );
  } else {
    const apiKey = "f0893f6d8d3fd5fce22940c2e9293be0";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse)
    return "loading.."
  }
}