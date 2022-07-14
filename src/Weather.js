import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
library.add(faMagnifyingGlass);

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  function changedCity(event) {
    setCity(event.target.value);
  }

  let cityName = "Paris";
  let weatherDescription = "Sunny";
  let minDegree = 35;
  let maxDegree = " " + 40;
  let temeratureValue = 22;
  let fullTimeValue = "14 June, Tuesday 11:44";
  let humididty = 84;
  let wind = 10;

  return (
    <section className="Weather">
      <div className="weather-container shadow-sm">
        <div className="row">
          <div className="col-sm-6">
            <div className="glavnaya shadow-sm">
              <h1 className="city">{cityName}</h1>
              <h2 className="weather">{weatherDescription}</h2>
              <h5 className="min-max">
                Min: <span className="min-temp">{minDegree}</span>º | Max:
                <span className="max-temp">{maxDegree}</span>º
              </h5>
              <div className="row">
                <div className="col-6">
                  <p className="temp">{temeratureValue}º</p>
                </div>
                <div className="col-6">
                  <img
                    src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/037/886/original/sunny.png?1655733776"
                    width="130"
                    className="mainimage img-fluid"
                    alt=""
                  />
                </div>
                <p className="datatime">{fullTimeValue}</p>
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
                          {humididty}%
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
                          {wind}km/h
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
                <span class="material-symbols-outlined">near_me</span>
              </button>
              <span className="currently">Current location</span>
            </div>
            <div className="formSearch d-flex justify-content-center">
              <form className="search shadow">
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
                <a href="/">
                  <span class="material-symbols-outlined turnoffbtn">
                    power_settings_new
                  </span>
                </a>
                <span>
                  <strong className="fdegree">C° </strong>
                </span>
              </span>
              <span>
                <a href="/">
                  <span class="material-symbols-outlined turnoffbtn">
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
