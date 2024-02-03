// Home.js
import React from "react";
import "./styles.scss";
import Slider from "../Slider/Slider";

const Home = ({ ref }) => {
  return (
    <div id="home" ref={ref} className="main">
      <Slider />
      <span>
        <a href="#about">
          <img
            src="https://webartdevelopers.com/blog/wp-content/uploads/2018/07/simple-arrow-animation-1.gif"
            alt="falling arrow"
          />
        </a>
      </span>
    </div>
  );
};

export default Home;
