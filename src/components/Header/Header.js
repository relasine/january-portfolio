import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    const background = {
      backgroundImage: "url(./images/clean-desk.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100vw",
      backgroundPosition: "center"
    };

    return (
      <header style={background} className="header">
        <section className="header-frame">
          <div className="name-frame">
            <h1 className="header-name">Kevin Simpson</h1>
            <h4 className="header-subtitle">Front End Developer</h4>
          </div>
        </section>
      </header>
    );
  }
}

export default Header;
