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
          <img src={imagePath} alt={title} className="project-image" />
          <h4 className="project-title">{title}</h4>
          <div className="project-links">
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
            <a href={deployed} className="project-deployed">
              deployed application
            </a>
          </div>
          <p className="project-details">{details}</p>
          <p>
            Tech stack: <span>{stack}</span>
          </p>
        </article>
      </Fade>
    );
  }
}

export default Project;
