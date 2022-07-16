import React, { useState } from "react";
import Forecast from "./Forecast";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function Weather() {
  const [weather, setWeather] = useState({});
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState("Paris");

  function search() {
    let myApiKey = "36a53e725b563939fbe0897565775163";
    let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${myApiKey}`;
    axios.get(apiUrlCity).then(showWeather);
  }

  function changedCity(event) {
    setCity(event.target.value);
  }
  function sumbittedForm(event) {
    event.preventDefault();
    search();
  }
  function showWeather(response) {
    setReady(true);

    setWeather({
      cityName: response.data.name,
      weatherDescription: response.data.weather[0].main,
      minDegree: Math.round(response.data.main.temp_min),
      maxDegree: Math.round(response.data.main.temp_max),
      temeratureValue: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });

    setLatitude(response.data.coord.lat);
    setLongitude(response.data.coord.lon);
  }

  if (ready) {
    return (
      <span>
        <section className="Weather">
          <div className="weather-container shadow-sm">
            <div className="row">
              <div className="col-sm-6">
                <div className="glavnaya shadow-sm">
                  <h1 className="city">{weather.cityName}</h1>
                  <h2 className="weather">{weather.weatherDescription}</h2>
                  <h5 className="min-max">
                    Min: <span className="min-temp">{weather.minDegree}</span>º
                    | Max:
                    <span className="max-temp"> {weather.maxDegree}</span>º
                  </h5>
                  <div className="row">
                    <div className="col-6">
                      <p className="temp">{weather.temeratureValue}º</p>
                    </div>
                    <div className="col-6">
                      <WeatherIcon code={weather.weatherDescription} />
                    </div>
                    <p className="datatime">
                      <FormattedDate date={weather.date} />
                    </p>
                  </div>
                  <div className="dopmeta">
                    <div className="row">
                      <div className="col-6">
                        <p className="humidity shadow-sm">
                          <span className="d-flex justify-content-center">
                            Humidity
                          </span>
                          <br />
                          <em>
                            <strong className="d-flex justify-content-center">
                              {weather.humidity}%
                            </strong>
                          </em>
                        </p>
                      </div>
                      <div className="col-6">
                        <p className="wind shadow-sm">
                          <span className="d-flex justify-content-center">
                            Wind
                          </span>
                          <br />
                          <em>
                            <strong className="d-flex justify-content-center">
                              {weather.wind}km/h
                            </strong>
                          </em>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="row d-flex justify-content-evenly">
                  <Forecast long={longitude} lat={latitude} code={2} />
                  <Forecast long={longitude} lat={latitude} code={3} />
                </div>
                <div className="row d-flex justify-content-evenly">
                  <Forecast long={longitude} lat={latitude} code={4} />
                  <Forecast long={longitude} lat={latitude} code={5} />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="formSearch d-flex justify-content-center">
                  <form className="search shadow" onSubmit={sumbittedForm}>
                    <input
                      type="text"
                      placeholder="Your city"
                      autoComplete="off"
                      onChange={changedCity}
                    />
                  </form>
                  <button
                    type="submit"
                    className="formbtn"
                    onClick={sumbittedForm}
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="footer">
          Coded by Ksenia. Open sourced on{" "}
          <a
            href="https://github.com/toxikaa/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dreamy-manatee-6c5cb2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </div>
      </span>
    );
  } else {
    search();
    return "Loading";
  }
}
