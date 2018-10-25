import React from "react";
// import ljeresume from "../../assets/lje-resume.pdf";

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
          <div className="hamburger-item">
            <a href="mailto:hello@lucaseckman.com">SAY HELLO</a>
          </div>
          <div className="hamburger-item">
            <a href="https://github.com/eckmLJE">GITHUB</a>
          </div>
          <div className="hamburger-item">
            <a href="https://www.linkedin.com/in/lucas-eckman-1a707717/">
              LINKEDIN
            </a>
          </div>
          <div className="hamburger-item">
            <a href="https://keybase.io/eckm">KEYBASE</a>
          </div>
          {/* <div className="hamburger-item">
            <a href={ljeresume}>RESUME</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
