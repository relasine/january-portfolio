import React, { Component } from "react";
import "./App.scss";

import Header from "../Header/Header";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Blogs from "../Blogs/Blogs";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      loaded: 0
    };
  }

  toggleLoading = () => {
    if (!this.state.loaded) {
      this.setState({
        loaded: this.state.loaded + 1
      });
    } else {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    return (
      <div className="App">
        {!this.state.loading && (
          <main>
            <Header />
            <About />
            <Portfolio />
            <Blogs />
            <Footer />
          </main>
        )}
        <Preloader toggleLoading={this.toggleLoading} />
      </div>
    );
  }
}

export default App;
