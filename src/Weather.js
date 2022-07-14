import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
library.add(faMagnifyingGlass);

export default function Weather() {
  const [city, setCity] = useState("Paris");
  const [weather, setWeather] = useState("");
  const [logo, setLogo] = useState("");
  function changedCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setWeather({
      cityName: response.data.name,
      weatherDescription: response.data.weather[0].main,
      minDegree: Math.round(response.data.main.temp_min),
      maxDegree: Math.round(response.data.main.temp_max),
      temeratureValue: Math.round(response.data.main.temp),
      fullTimeValue: response.data.dt,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
    });
    setLogo(require(`./images/${response.data.weather[0].main}.png`));
  }

  function fahrenheit(event) {
    event.preventDefault();
    setWeather({
      cityName: weather.cityName,
      weatherDescription: weather.weatherDescription,
      minDegree: Math.round((weather.minDegree * 9) / 5 + 32),
      maxDegree: Math.round((weather.maxDegree * 9) / 5 + 32),
      temeratureValue: Math.round((weather.temeratureValue * 9) / 5 + 32),
      fullTimeValue: weather.fullTimeValue,
      humidity: weather.humidity,
      wind: weather.wind,
    });
  }

  function sumbittedForm(event) {
    event.preventDefault();
    let myApiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${myApiKey}`;
    axios.get(apiUrlCity).then(showWeather);
  }

  return (
    <section className="Weather">
      <div className="weather-container shadow-sm">
        <div className="row">
          <div className="col-sm-6">
            <div className="glavnaya shadow-sm">
              <h1 className="city">{weather.cityName}</h1>
              <h2 className="weather">{weather.weatherDescription}</h2>
              <h5 className="min-max">
                Min: <span className="min-temp">{weather.minDegree}</span>º |
                Max:
                <span className="max-temp"> {weather.maxDegree}</span>º
              </h5>
              <div className="row">
                <div className="col-6">
                  <p className="temp">{weather.temeratureValue}º</p>
                </div>
                <div className="col-6">
                  <img
                    src={logo}
                    width="130"
                    className="mainimage img-fluid"
                    alt=""
                  />
                </div>
                <p className="datatime">1</p>
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
          <div className="col-lg-6">
            <div className="d-flex justify-content-center currentLocationElement">
              <button className="loc">
                <span className="material-symbols-outlined">near_me</span>
              </button>
              <span className="currently">Current location</span>
            </div>
            <div className="formSearch d-flex justify-content-center">
              <form className="search shadow" onSubmit={sumbittedForm}>
                <input
                  type="text"
                  placeholder="Your city"
                  autoComplete="off"
                  onChange={changedCity}
                />
              </form>
              <button type="submit" className="formbtn"></button>
            </div>
            <div className="degreeBnt d-flex justify-content-center">
              <span className="mx-3 ">
                <a href="/" onClick={sumbittedForm}>
                  <span className="material-symbols-outlined turnoffbtn">
                    power_settings_new
                  </span>
                </a>
                <span>
                  <strong className="fdegree">C° </strong>
                </span>
              </span>
              <span>
                <a href="/" onClick={fahrenheit}>
                  <span className="material-symbols-outlined turnoffbtn">
                    power_settings_new
                  </span>
                </a>

                <span>
                  <strong className="fdegree">F°</strong>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
