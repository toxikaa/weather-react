import React, { useState } from "react";
import axios from "axios";

export default function Forecast(props) {
  const [weather, setWeather] = useState({});
  const [fullDate, setFullDate] = useState({});
  const [logo, setLogo] = useState("");

  function showForecast(response) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let monthes = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    setWeather({
      forecastdescription: response.data.daily[1].weather[0].main,
      mindegree: Math.round(response.data.daily[1].temp.min),
      maxdegree: Math.round(response.data.daily[1].temp.max),
    });
    let newDate = new Date(response.data.daily[1].dt * 1000);
    let dateday = newDate.getDate();
    let month = monthes[newDate.getMonth()];
    let weekDay = days[newDate.getDay()];
    setFullDate({
      dateday: { dateday },
      month: { month },
      weekday: { weekDay },
    });
    setLogo(require(`./images/${response.data.daily[1].weather[0].main}.png`));
  }
  let myApiKey = "4a1f4bf33289372d2c983ab44f407e8c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.long}&units=metric&appid=${myApiKey}`;
  //axios.get(apiUrl).then(showForecast);

  return (
    <div className="col-6 text-center forecast">
      <div className="forecastDay">{fullDate.weekday}</div>
      <div className="forecastDate">
        {fullDate.dateday} {fullDate.month}
      </div>
      <div className="forecastWeatherDescription">
        {weather.forecastdescription}
      </div>
      <div className="forecastTemrepature">
        {weather.maxdegree}º | {weather.mindegree}º
      </div>
      <div>
        <img src={logo} className="forecastImage" alt="" />
      </div>
    </div>
  );
}
