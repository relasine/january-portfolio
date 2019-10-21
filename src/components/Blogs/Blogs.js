import React, { Component } from "react";
import "./Blogs.scss";
import Fade from "react-reveal/Fade";

import Blog from "../Blog/Blog";
import { blogs } from "../../content/blogs";

class Blogs extends Component {
  myBlogs = () =>
    blogs.map((blog, index) => {
      return (
        <Blog data={blog} key={blog.id} delay={this.generateDelay(index + 1)} />
      );
    });

  generateDelay = index => {
    return index * 200;
  };
  render() {
    return (
      <div className="blog-section-backer">
        <section className="blogs-section">
          <Fade bottom>
            <h2 className="blog-title">Blogs</h2>
          </Fade>
          <Fade cascade bottom>
            <div className="blog-wrapper">{this.myBlogs()}</div>
          </Fade>
        </section>
      </div>
    );
  }
}

export default Blogs;
