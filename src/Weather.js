import React, { useState } from 'react'
import axios from 'axios';
import "./Weather.css"
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState ({ ready : false})
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response){
  
    setWeatherData({
    ready : true,
    coordinates: response.data.coord,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    temperature: response.data.main.temp,
    description: response.data.weather[0].main,
    icon: response.data.weather[0].icon,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    feelslike: response.data.main.feels_like
  })
 };
 function search(){
  const apiKey = "f0893f6d8d3fd5fce22940c2e9293be0";
  let units = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse)
 }

  function handleSubmit(event){
    event.preventDefault()
    search()
  }

 function handleCityChange(event){
    setCity(event.target.value);
 }

  if (weatherData.ready){
  return (
    <div className="Weather">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              className="form-control shadow-sm border-0 w-100 city-input"
              type="search"
              placeholder="enter a city.."
              autoComplete="off"
              autoFocus="on"
              required
              onChange={handleCityChange}
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              className="btn btn-outline-info shadow-sm search-button"
              value="search"
            />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData}/>
      <WeatherForecast coordinates={weatherData.coordinates}/>
      <div className="weather-forecast"></div>
      
    </div>

  );
  } else {
   search()
    return "loading.."
  }
}