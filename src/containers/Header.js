import React, { Component, Fragment } from "react";
import "../css/Header.css";

import BurgerMenu from "../components/Header/BurgerMenu";

class Header extends Component {
  state = { hamburger: false };

  handleBurger = e => {
    e.preventDefault();
    this.setState({ hamburger: !this.state.hamburger });
  };

  burgerX = () => (this.state.hamburger ? " exed" : null);

  render() {
    return (
      <Fragment>
        <BurgerMenu toggle={this.state.hamburger} />
        <header>
          <h1>
            LUCAS <span>ECKM</span>
            AN
          </h1>
          <button className="hamburger" onClick={this.handleBurger}>
            <div className="hamburger-box">
              <div className={"hamburger-inner top" + this.burgerX()} />
              <div className={"hamburger-inner middle" + this.burgerX()} />
              <div className={"hamburger-inner bottom" + this.burgerX()} />
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
