import React from "react";

export default function WeatherIcon(props) {
  let images = require(`./images/${props.code}.png`);
  return (
    <img
      src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/037/889/original/cloudy.png?1655733793"
      width="130"
      className="mainimage img-fluid"
      alt={props.code}
    />
  );
}
