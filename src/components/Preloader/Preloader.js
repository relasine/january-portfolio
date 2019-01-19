import React, { Component } from "react";
import "./Preloader.scss";

class Preloader extends Component {
  render() {
    return (
      <div className="preloader">
        <img
          onLoad={this.props.toggleLoading}
          className="preloader-background-image"
          src="./images/clean-desk.jpg"
          alt="loading-thing"
        />
        <img
          onLoad={this.props.toggleLoading}
          className="preloader-background-image"
          src="./images/ksheadshotsmol.jpg"
          alt="loading-me"
        />
      </div>
    );
  }
}

export default Preloader;
