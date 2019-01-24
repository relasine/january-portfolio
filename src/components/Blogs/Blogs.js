import React, { Component } from "react";
import "./Blogs.scss";

import Blog from "../Blog/Blog";
import { blogs } from "../../content/blogs";

class Blogs extends Component {
  render() {
    const myBlogs = blogs.map(blog => {
      return <Blog data={blog} key={blog.id} />;
    });
    return (
      <div className="blog-section-backer">
        <section className="blogs-section">
          <h2 className={`${this.props.loadStatus} blog-title`}>Blogs</h2>
          <div className={`blog-wrapper ${this.props.loadStatus}`}>
            {myBlogs}
          </div>
        </section>
      </div>
    );
  }
}

export default Blogs;
