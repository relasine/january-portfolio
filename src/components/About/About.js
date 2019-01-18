import React, { Component } from "react";
import "./About.scss";

class About extends Component {
  render() {
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
          <p>
            I'm Kevin Simpson, a front end developer living in the north Denver
            metro area.
            <br />
            <br />I am tenacious problem solver with a passion for React, CSS,
            unit testing, and teaching. I push myself to learn something new
            about programming every day, and I take criticism with humility and
            grace.
            <br />
            <br />
            In my free time I am a husband and father who enjoys chasing my son
            around the house, Mario Kart marathons, and 90s-era JRPGs.
          </p>
        </article>
      </section>
    );
  }
}

export default About;
