import React, { Component } from "react";
import "./About.scss";

import { about } from "../../content/about";

class About extends Component {
  render() {
    const details = about.map(point => {
      return (
        <p>
          {point} <br />
          <br />
        </p>
      );
    });
    return (
      <section className="about-section">
        <article className="about-hero">
          <h2>about me</h2>
          <img
            className="hero-img"
            src="./images/ksheadshotsmol.jpg"
            alt="kevin simpson"
          />
        </article>
        <article className="about-details">
          <div>{details}</div>
        </article>
      </section>
    );
  }
}

export default About;
