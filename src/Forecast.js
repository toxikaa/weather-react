import React, { useState } from "react";
import axios from "axios";

import ForecastDay from "./ForecastDay";
export default function Forecast(props) {
  const [forecast, setForecast] = useState({});
  const [ready, setReady] = useState(false);
  let days = forecast[props.code];

  function showForecast(response) {
    setForecast(response.data.daily);

    setReady(true);
  }
  if (ready) {
    return <ForecastDay date={days} />;
  } else {
    let myApiKey = "a7c0e7ad916a9fcd247e7f5c33cfcb53";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.long}&units=metric&appid=${myApiKey}`;
    axios.get(apiUrl).then(showForecast);
    return null;
  }
}
