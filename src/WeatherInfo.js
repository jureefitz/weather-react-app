import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
     <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h2>{props.data.description}</h2>
      Last Searched:
      <h3 className="date-time"><FormattedDate date={props.data.date}/></h3>
      <div className="row">
      <div className="col-6 d-flex">
          <WeatherIcon code={props.data.icon} alt={props.data.description} size={45}/>
          <WeatherTemperature fahrenheit={props.data.temperature} />
          
        </div>

        <div className="col-6">
          <span className="climate">
            Feels Like: <span>{Math.round(props.data.feelslike)}</span>℉<br />
            Humidity: <span>{Math.round(props.data.humidity)}</span>% <br />
            Wind: <span>{Math.round(props.data.wind)}</span> mph
          </span>
        </div>
      </div>
    </div>
    )
}