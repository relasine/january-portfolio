import React, { Component } from "react";
import "./Portfolio.scss";
import Fade from "react-reveal/Fade";

import Project from "../Project/Project";
import { projects } from "../../content/projects";

class Portfolio extends Component {
  myProjects = () =>
    projects.map((project, index) => {
      return (
        <Project
          data={project}
          key={project.title}
          delay={this.generateDelay(index + 1)}
        />
      );
    });

  generateDelay = index => {
    return index * 200;
  };

  render() {
    return (
      <section className="portfolio-section">
        <Fade bottom>
          <h1 className={`portfolio-title`}>Portfolio</h1>
        </Fade>
        <div className="projects-wrapper">{this.myProjects()}</div>
      </section>
    );
  }
}

export default Portfolio;
