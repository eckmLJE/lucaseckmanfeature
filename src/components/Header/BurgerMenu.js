import React from "react";

const BurgerMenu = props => {
  const visibility = props.toggle
    ? "hamburger-menu visible"
    : "hamburger-menu hidden";
  return (
    <div className={visibility}>
      <div className="hamburger-buffer" />
      <div className="hamburger-list">
        <div className="hamburger-item">HOME</div>
        <div className="hamburger-item">PORTFOLIO</div>
        <div className="hamburger-item">CONTACT</div>
      </div>
    </div>
  );
};

export default BurgerMenu;
