import React, { Component } from "react";
import "./Project.scss";

class Project extends Component {
  render() {
    const { title, imagePath, repo, deployed, details } = this.props.data;
    return (
      <article className="project">
        <img src={imagePath} alt={title} className="project=image" />
        <h4 className="project-title">{title}</h4>
        <a
          href={repo}
          rel="noopener noreferrer"
          target="_blank"
          className="project-repo"
        >
          project repo
        </a>
        <a href={deployed} className="project-deployed">
          deployed application
        </a>
        <p>{details}</p>
      </article>
    );
  }
}

export default Project;
