import React from "react";
import "../css/Portfolio.css";

import PortfolioCard from "../components/Portfolio/PortfolioCard";

import concertplanbg from "../assets/concertplanbg.jpg";
import osloadmobg from "../assets/osloadmobg.jpeg";
import parselbg from "../assets/parselbg.jpeg";

const portfolioProjects = [
  {
    url: "http://www.lucaseckman.com/concertplan",
    title: "CONCERTPLAN",
    content:
      "View live concert data from TicketMaster. Start plans and comment with your friends to attend concerts.",
    background: concertplanbg
  },
  {
    url: "http://www.lucaseckman.com/roomseek",
    title: "ROOMSEEK",
    content:
      "Set rent, move date, and pet filters to view available bedrooms across several apartments. ",
    background: osloadmobg
  },
  {
    url: "https://medium.com/@lucas.eckman/easy-as-1-2-3-cdca597f35a6",
    title: "PARSEL",
    content:
      "Read this blog post on devising a text annotation feature with React and Redux.",
    background: parselbg
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
