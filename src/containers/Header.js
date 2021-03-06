import React, { Component, Fragment } from "react";
import "../css/Header.css";

import Gear from "../components/Header/Gear";
import BurgerMenu from "../components/Header/BurgerMenu";
import ContactCard from "../components/Header/ContactCard";

class Header extends Component {
  state = { hamburger: false, activeNav: "portfolio" };

  handleBurger = e => {
    e.preventDefault();
    this.setState({ hamburger: !this.state.hamburger });
  };

  handleContact = e => {
    e.preventDefault();
    this.setState({ contact: !this.state.contact });
  };

  burgerX = () => (this.state.hamburger ? " exed" : null);

  handleNav;

  render() {
    const burgerClass = this.burgerX();
    return (
      <Fragment>
        <BurgerMenu toggle={this.state.hamburger} />
        <ContactCard toggle={this.state.contact} />
        <header>
          <div className="name-container">
            <Gear />
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
                <a
                  href="https://github.com/eckmLJE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lucaseckman/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINKEDIN
                </a>
              </li>
              <li>
                <a
                  href="https://keybase.io/eckm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  KEYBASE
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@lucaseckman.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SAY HELLO
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </Fragment>
    );
  }
}

export default Header;
