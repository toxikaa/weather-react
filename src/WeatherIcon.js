import React from "react";

export default function WeatherIcon(props) {
  let images = `./images/${props.code}.png`;
  return (
    <img
      src={images}
      width="130"
      className="mainimage img-fluid"
      alt={props.code}
    />
  );
}
