import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.date.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="col-6 text-center forecast">
      <div className="forecastDay">{day()}</div>

      <div className="forecastWeatherDescription">
        {props.date.weather[0].main}
      </div>
      <div className="forecastTemrepature">
        {Math.round(props.date.temp.max)}º | {Math.round(props.date.temp.min)}º
      </div>
      <div>
        <WeatherIcon code={props.date.weather[0].main} />
      </div>
    </div>
  );
}
