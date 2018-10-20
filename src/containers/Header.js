import React, { Component, Fragment } from "react";
import "../css/Header.css";
import "../css/Gear.css";

import BurgerMenu from "../components/Header/BurgerMenu";

class Header extends Component {
  state = { hamburger: false };

  handleBurger = e => {
    e.preventDefault();
    this.setState({ hamburger: !this.state.hamburger });
  };

  burgerX = () => (this.state.hamburger ? " exed" : null);

  render() {
    const burgerClass = this.burgerX();
    return (
      <Fragment>
        <BurgerMenu toggle={this.state.hamburger} />
        <header>
          <div className="name-container">
            <div className="gear-container">
              <div className="gear">
                <div className="center" />
                <div className="tooth" />
                <div className="tooth" />
                <div className="tooth" />
                <div className="tooth" />
                <div className="tooth" />
                <div className="tooth" />
                <div className="tooth" />
                <div className="tooth" />
                <div className="tooth" />
                <div className="tooth" />
                <div className="tooth" />
                <div className="tooth" />
              </div>
            </div>
            <h1>
              LUCAS <span>ECKM</span>
              AN
            </h1>
          </div>
          <button className="hamburger" onClick={this.handleBurger}>
            <div className="hamburger-box">
              <div className={"hamburger-inner top" + burgerClass} />
              <div className={"hamburger-inner middle" + burgerClass} />
              <div className={"hamburger-inner bottom" + burgerClass} />
            </div>
          </button>
          <nav>
            <ul>
              <li>
                <button>Home</button>
              </li>
              <li>
                <button>
                  Portfolio <i />
                </button>
              </li>
              <li>
                <button>Contact</button>
              </li>
            </ul>
          </nav>
        </header>
      </Fragment>
    );
  }
}

export default Header;
