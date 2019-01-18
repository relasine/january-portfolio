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
        <a
          href="https://docs.google.com/document/d/188aGmw_v47ugDNWau8qPsNtYaroqE2WWf0EwCevmQYE/edit?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
        >
          resume
        </a>
        <p>Kevin Simpson ©2019 All Rights Reserved</p>
      </section>
    );
  }
}

export default Footer;
