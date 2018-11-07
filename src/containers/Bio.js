import React from "react";
import "../css/Bio.css";

import ljeresume from "../assets/lje-resume.pdf";

const Bio = () => {
  return (
    <section className="bio">
      <div className="bio-content">
        <p>
          Hello, I'm <strong>Lucas</strong>, a full-stack web developer, bicycle
          courier, and urban design consultant living in Washington, DC.
        </p>
        <p>
          I'm bringing my lifelong passion for learning and problem solving and
          my fresh experience in modern web development to bear on new
          opportunities in software engineering.
        </p>
        <p>
          My focus is implenting beautiful and performant front end experiences
          with clean, modular and well-documented code using leading edge web
          technologies.
        </p>
      </div>
      <div className="bio-cards">
        <div className="bio-card">
          <div className="bio-card-inner">
            <h3>TECHNOLOGIES</h3>
            <ul>
              <li>JavaScript ES6</li>
              <li>React.JS (Redux, Router, Thunk)</li>
              <li>HTML5 + CSS3</li>
              <li>Ruby + Rails (bcrypt, JWT)</li>
              <li>PostgreSQL, SQLite</li>
              <li>Bootstrap, Semantic, Ant Design</li>
              <li>SVG</li>
            </ul>
          </div>
        </div>
        <div className="bio-card">
          <div className="bio-card-inner">
            <h3>INTERESTS</h3>
            <ul>
              <li>Open Source Software</li>
              <li>Code for DC (and for America)</li>
              <li>Urban Design + Transportation</li>
              <li>Design Thinking</li>
              <li>Esports</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="resume-link">
        <p>
          You can download my resume in pdf{" "}
          <a href={ljeresume} download alt="">
            here
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Bio;
