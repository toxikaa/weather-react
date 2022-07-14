import React from "react";

export default function FormattedDate(props) {
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
  let dateday = props.date.getDate();
  let month = monthes[props.date.getMonth()];
  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();
  let day = days[props.date.getDay()];
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let formattedDate = `${dateday} ${month}, ${day} ${hour}:${minutes}`;
  return formattedDate;
}
