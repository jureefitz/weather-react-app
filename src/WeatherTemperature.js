import React, { useState } from "react";

export default function WeatherTemperature(props){
    const [units, setUnits] = useState("fahrenheit");
    
    function showCelsius(event){
      event.preventDefault();
      setUnits("fahrenheit")
    }

    function showFahrenheit(event){
        event.preventDefault()
        setUnits("celsius")
    }

    if (units === "fahrenheit") {
    return (
        <div className="WeatherTemperature">
            <span className="temperature">{Math.round(props.fahrenheit)}
            </span>
            <span className="units">°F | <a href="/" onClick={showCelsius}>℃</a> 
            </span> 
        </div>
    )
    } else {
        let celsius = (props.fahrenheit - 32) * 5/9;
        return (
        <div className="WeatherTempreature">
            <span className="temperature">{Math.round(celsius)}
            </span>
            <span className="units"><a href="/" onClick={showFahrenheit}>°F</a> | ℃ 
            </span>
        </div>
        )
    }
}