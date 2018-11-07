import React from "react";
import "../css/Portfolio.css";

import PortfolioCard from "../components/Portfolio/PortfolioCard";

import concertplanbg from "../assets/concertplanbg.jpg";
import osloadmobg from "../assets/osloadmobg.jpeg";
import messtelbg from "../assets/messtelbg.png"

const portfolioProjects = [
  {
    url: "http://www.lucaseckman.com/concertplan",
    title: "CONCERTPLAN",
    content:
      "View live concert data. Start plans and comment with your friends to attend concerts.",
    background: concertplanbg
  },
  {
    url: "http://www.lucaseckman.com/messtel",
    title: "MESSTEL",
    content:
      "DC couriers leave intel for each other on this Mapbox enabled discussion app.",
      background: messtelbg
  },
  {
    url: "http://www.lucaseckman.com/roomseek",
    title: "ROOMSEEK",
    content:
      "Set rent, move date, and pet filters to view available bedrooms across several apartments. ",
    background: osloadmobg
  }
];

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio-container">
        {portfolioProjects.map(project => (
          <PortfolioCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
