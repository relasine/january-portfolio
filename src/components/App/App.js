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
      loaded: 0,
      aboutLoad: false,
      portfolioLoad: false,
      blogLoad: false
    };
  }

  scrollCheck = () => {
    if (window.pageYOffset >= 900) {
      this.setState({
        aboutLo        portfolioLoad: true,
        blogLoad: true
      });
      window.removeEventListener("scroll", this.scrollCheck);
    } else if (window.pageYOffset >= 500) {
      this.setState({
        aboutLoad: true,
        portfolioLoad: true
      });
    } else if (window.pageYOffset >= 100) {
      this.setState({
        aboutLoad: true
      });
    }
  };

  toggleLoading = () => {
    if (!this.state.loaded) {
      this.setState({
        loaded: this.state.loaded + 1
      });
      window.addEventListener("scroll", this.scrollCheck);
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
          <main onScroll={this.scrollCheck}>
            <Header />
            <About loadStatus={this.state.aboutLoad} />
            <Portfolio loadStatus={this.state.portfolioLoad} />
            <Blogs loadStatus={this.state.blogLoad} />
            <Footer />
          </main>
        )}
        <Preloader toggleLoading={this.toggleLoading} />
      </div>
    );
  }
}

export default App;
