import React from "react";

import "../../css/PortfolioCard.css";

const PortfolioCard = props => {
  return (
    <div className="portfolio-card">
      <div className="portfolio-card-inner">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${props.project.background})` }}
        />
        <div className="card-panel">
          <h1>{props.project.title}</h1>
          <p>{props.project.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
