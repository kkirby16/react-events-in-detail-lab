// Code CoordinatesButton Component Here

import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  constructor() {
    super();
  }

  getCoordinates = (event) => {
    const coordinatesArray = [];
    const x = event.clientX;
    const y = event.clientY;
    coordinatesArray.push(x, y);
    this.props.onReceiveCoordinates(coordinatesArray);
  };

  render() {
    return <button onClick={this.getCoordinates}></button>;
  }
}
