import React from "react";

const BurgerMenu = props => {
  const visibility = props.toggle
    ? "hamburger-menu visible"
    : "hamburger-menu hidden";
  return (
    <div className={visibility}>
      <div className="hamburger-buffer" />
      {/* <div className="hamburger-bio">
        <strong>Lucas Eckman </strong> is a full stack web developer, urban
        design consultant, and bicycle courier living in Washington, DC.
      </div> */}
      <div className="hamburger-list-container">
        <div className="hamburger-list">
          <div className="hamburger-item">SAY HELLO</div>
          <div className="hamburger-item">GITHUB</div>
          <div className="hamburger-item">LINKEDIN</div>
          <div className="hamburger-item">KEYBASE</div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
