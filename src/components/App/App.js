import React, { Component } from "react";
import "./App.scss";

import Header from "../Header/Header";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
