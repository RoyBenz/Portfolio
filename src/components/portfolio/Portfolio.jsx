import React from "react";
import IMG1 from "../../assets/portfolio 1.webp";
import IMG2 from "../../assets/portfolio 2.webp";
import "./Portfolio.css";

const data = [
  {
    id: 1,
    title: "Expenses Tracker Project",
    image: IMG1,
    github: "https://github.com/webdesigner2b/ReactJS-ExpensesTrack-Project",
  },
  {
    id: 2,
    title: "Username Project",
    image: IMG2,
    github:
      "https://github.com/webdesigner2b/Adding-User-Names-ReactJS-Project",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image"></div>
              <img src={image} alt={title} />
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
