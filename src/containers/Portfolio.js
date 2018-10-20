import React from "react";
import "../css/Portfolio.css";

import concertplanbg from "../assets/concertplanbg.jpg";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-card">
          <div className="portfolio-card-inner">
            <img src={concertplanbg} alt="ConcertPlan" />
              <h1>CONCERTPLAN</h1>
          </div>
        </div>
        <div className="portfolio-card">
          <div className="portfolio-card-inner">
            <h1>ROOMSEEK</h1>
          </div>
        </div>
        <div className="portfolio-card">
          <div className="portfolio-card-inner">
            <h1>PARSEL</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
