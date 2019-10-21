import React, { Component } from "react";
import "./Blog.scss";
import Fade from "react-reveal/Fade";

class Blog extends Component {
  render() {
    const { title, imagePath, link } = this.props.data;
    return (
      <Fade delay={this.props.delay} bottom>
        <article className="blog">
          <a href={link} rel="noopener noreferrer" target="_blank">
            <img src={imagePath} alt={`${title} preview thumbnail`} />

            <h4>{title}</h4>
          </a>
        </article>
      </Fade>
    );
  }
}

export default Blog;
