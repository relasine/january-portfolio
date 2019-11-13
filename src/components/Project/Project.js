import React, { Component } from "react";
import "./Project.scss";
import Fade from "react-reveal/Fade";

class Project extends Component {
  render() {
    const {
      title,
      imagePath,
      repo,
      deployed,
      details,
      stack
    } = this.props.data;
    return (
      <Fade delay={this.props.delay} bottom>
        <article className="project">
          <a href={deployed}>
            <img src={imagePath} alt={title} className="project-image" />
          </a>
          <h4 className="project-title">{title}</h4>
          <p className="project-details">{details}</p>
          <p className="project-tech-stack">
            Tech stack: <span>{stack}</span>
          </p>
          <div className="project-links">
            <a href={deployed} className="project-deployed">
              deployed application
            </a>
            {repo && (
              <a
                href={repo}
                rel="noopener noreferrer"
                target="_blank"
                className="project-repo"
              >
                project repo
              </a>
            )}
          </div>
        </article>
      </Fade>
    );
  }
}

export default Project;
