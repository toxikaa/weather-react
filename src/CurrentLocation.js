import React, { Component } from "react";

export default class CurrentLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  _click(event) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.refresh(position.coords.latitude, position.coords.longitude);
    });
  }

  render() {
    return (
      <button className="loc" onClick={(event) => this._click(event)}>
        <span className="material-symbols-outlined">near_me</span>
      </button>
    );
  }
}
