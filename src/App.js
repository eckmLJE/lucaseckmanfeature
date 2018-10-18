import React, { Component } from 'react';
import './App.css';

import Header from "./containers/Header"
import Hero from "./containers/Hero"
// import Bio from "./containers/Bio"
// import Portfolio from "./containers/Portfolio"
// import Footer from "./containers/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        {/* <Bio />
        <Portfolio />
        <Footer /> */}
      </div>
    );
  }
}

export default App;
