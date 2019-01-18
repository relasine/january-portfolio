import React, { Component } from "react";

import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/kevinjohnsimpson/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://www.github.com/relasine/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.twitter.com/relasine/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-twitter" />
          </a>
        </div>
        <p>Kevin Simpson ©2019 All Rights Reserved</p>
      </section>
    );
  }
}

export default Footer;
