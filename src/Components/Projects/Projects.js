import React from "react";
import "./styles.scss";

function Projects({ ref }) {
  return (
    <div id="projects" ref={ref} className="projects">
      <h1>MY PROJECTS</h1>
      <div className="project_cards">
        <div className="project_cards__card">
          <img src="../../Grove-Galaria.png" alt="grove-galaria" />
          <div className="project_cards__card__buttonBox">
            <a
              href="https://65ede0ecf9ddda8acb045c4c--strong-cranachan-7c0aa0.netlify.app/"
              target="_blank"
            >
              <button className="button">See Live</button>
            </a>
            <a
              href="https://github.com/MouliKarmakar/GroveGalleria"
              target="_blank"
            >
              <button className="button">Open in Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
