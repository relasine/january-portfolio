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
      <section className="blogs-section">
        <h2>Blogs</h2>
        <div className="blog-wrapper">{myBlogs}</div>
      </section>
    );
  }
}

export default Blogs;
