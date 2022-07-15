import React, { useState, useEffect } from "react";
import axios from "axios";

import ForecastDay from "./ForecastDay";
export default function Forecast(props) {
  const [forecast, setForecast] = useState({});
  const [ready, setReady] = useState(false);
  let days = forecast[props.code];

  useEffect(() => {
    setReady(false);
  }, [props.lat]);

  function showForecast(response) {
    setForecast(response.data.daily);

    setReady(true);
  }
  if (ready) {
    return <ForecastDay date={days} />;
  } else {
    let myApiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.long}&units=metric&appid=${myApiKey}`;
    axios.get(apiUrl).then(showForecast);
    return null;
  }
}
