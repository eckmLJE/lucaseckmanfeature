import React from "react";
import "../css/Portfolio.css";

import PortfolioCard from "../components/Portfolio/PortfolioCard";

import concertplanbg from "../assets/concertplanbg.jpg";
import osloadmobg from "../assets/osloadmobg.jpeg";
import parselbg from "../assets/parselbg.jpeg";

const portfolioProjects = [
  { title: "CONCERTPLAN", content: "", background: concertplanbg },
  { title: "ROOMSEEK", content: "", background: osloadmobg },
  { title: "PARSEL", content: "", background: parselbg }
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        {portfolioProjects.map(project => (
          <PortfolioCard project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
