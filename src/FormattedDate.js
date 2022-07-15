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

  let day = days[props.date.getDay()];

  let formattedDate = `${dateday} ${month}, ${day}`;
  return formattedDate;
}
