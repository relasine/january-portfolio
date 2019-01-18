import React, { Component } from "react";
import "./App.scss";

import Header from "../Header/Header";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Portfolio />
        <Blogs />
        <Footer />
      </div>
    );
  }
}

export default App;
