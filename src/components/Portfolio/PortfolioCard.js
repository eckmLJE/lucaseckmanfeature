import React from "react";

const PortfolioCard = props => {
  return (
    <div className="portfolio-card">
      <div
        className="portfolio-card-inner"
        style={{ backgroundImage: `url(${props.project.background})` }}
      >
        <h1>{props.project.title}</h1>
        <p>{props.project.content}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
