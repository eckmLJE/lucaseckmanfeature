import React from "react";
import "../css/Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-card">
          <div className="portfolio-card-inner">
            <h1>ConcertPlan</h1>
          </div>
        </div>
        <div className="portfolio-card">
          <div className="portfolio-card-inner">
            <h1>RoomSeek</h1>
          </div>
        </div>
        <div className="portfolio-card">
          <div className="portfolio-card-inner">
            <h1>Parsel</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
