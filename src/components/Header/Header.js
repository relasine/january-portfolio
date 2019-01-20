import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      offset: 0
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollMove);
  }

  scrollMove = () => {
    if (window.pageYOffset < 630) {
      this.setState({
        offset: window.pageYOffset / 3
      });
    }
  };

  render() {
    const background = {
      backgroundImage: "url(./images/clean-desk.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100vw",
      backgroundPositionY: this.state.offset
    };

    return (
      <header style={background} className="header">
        <section style={{ bottom: this.state.offset }} className="header-frame">
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
