import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
     <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h2>{props.data.description}</h2>
      Last Searched:
      <h3 className="date-time"><FormattedDate date={props.data.date}/></h3>
      <div className="row">
        <div className="col-6">
          <img src={props.data.imgUrl} alt={props.data.description} />
          <span className="temperature">{Math.round(props.data.temperature)}</span>
          <span className="units">°F</span>
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