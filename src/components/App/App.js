import React, { Component } from "react";
import "./App.scss";

import Header from "../Header/Header";
import About from "../About/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
