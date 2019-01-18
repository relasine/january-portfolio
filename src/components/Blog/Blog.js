import React, { Component } from "react";
import "./Blog.scss";

class Blog extends Component {
  render() {
    const { title, imagePath, link } = this.props.data;
    return (
      <article className="blog">
        <a href={link} rel="noopener noreferrer" target="_blank">
          <img src={imagePath} alt="blog preview image" />

          <h4>{title}</h4>
        </a>
      </article>
    );
  }
}

export default Blog;
