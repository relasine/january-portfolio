import React, { Component } from "react";
import "./Portfolio.scss";

import Project from "../Project/Project";
import { projects } from "../../content/projects";

class Portfolio extends Component {
  render() {
    const myProjects = projects.map(project => {
      return <Project data={project} key={project.title} />;
    });

    return (
      <section className="portfolio-section">
        <h1 className={`${this.props.loadStatus} portfolio-title`}>
          Portfolio
        </h1>
        <div className={`projects-wrapper ${this.props.loadStatus}`}>
          {myProjects}
        </div>
      </section>
    );
  }
}

export default Portfolio;
