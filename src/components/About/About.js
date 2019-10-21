import React, { Component } from "react";
import "./About.scss";
import Fade from "react-reveal/Fade";

import { about } from "../../content/about";

class About extends Component {
  render() {
    const details = about.map((point, index) => {
      return (
        <p key={`about ${index}`}>
          {point} <br />
          <br />
        </p>
      );
    });
    return (
      <div className="about-wrapper">
        <section className="about-section">
          <Fade top>
            <article className="about-hero">
              <h2>about me</h2>
              <img
                className="hero-img"
                src="./images/ksheadshotsmol.jpg"
                alt="kevin simpson"
              />
              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kevinjohnsimpson/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-linkedin" />
                </a>
                <a
                  href="https://www.github.com/relasine/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-github" />
                </a>
                <a
                  href="https://www.twitter.com/relasine/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </article>
          </Fade>
          <Fade bottom>
            <article className="about-details">
              <div>
                {details}
                <a
                  href="https://docs.google.com/document/d/188aGmw_v47ugDNWau8qPsNtYaroqE2WWf0EwCevmQYE/edit?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  resume
                </a>
              </div>
            </article>
          </Fade>
        </section>
      </div>
    );
  }
}

export default About;
