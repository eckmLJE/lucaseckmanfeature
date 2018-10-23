import React from "react";
import "../css/Bio.css";

const Bio = () => {
  return (
    <section className="bio">
      <div className="bio-content">
        <p>
          <strong>Lucas Eckman</strong> is a full-stack web developer, bicycle
          courier, and urban design consultant living in Washington, DC.
        </p>
      </div>
      <div className="bio-cards">
        <div className="bio-card">
          <div className="bio-card-inner">
            <h1>TECHNOLOGIES</h1>
            <ul>
              <li>JavaScript ES6</li>
              <li>React.JS</li>
              <li>HTML5 + CSS3</li>
              <li>Ruby + Rails</li>
              <li>Redux, Router, Thunk</li>
              <li>PostgreSQL, SQLite</li>
              <li>Bootstrap, Semantic, Ant Design</li>
              <li>SVG</li>
              <li>Unity 3D, Google Cardboard</li>
            </ul>
          </div>
        </div>
        <div className="bio-card">
          <div className="bio-card-inner">
            <h1>INTERESTS</h1>
            <ul>
              <li>Urban Design + Transportation</li>
              <li>Cycling</li>
              <li>Hiking + Camping</li>
              <li>Travel</li>
              <li>Esports</li>
              {/* <li>My dog named Lady</li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
