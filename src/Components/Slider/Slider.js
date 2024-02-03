import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import "./styles.scss";

const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1480506132288-68f7705954bd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbXB1dGVyJTIwY29kaW5nfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww",
    "https://training.humboldt.edu/sites/default/files/styles/panopoly_image_original/public/remote_work_small.jpg?itok=ljOkj18D",
  ];
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const imageSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
    config: { duration: 1000 },
  });

  //   const textSpring = useSpring({
  //     opacity: hovered ? 1 : 0.8,
  //     from: { opacity: 0.8 },
  //     reset: true,
  //     config: config.wobbly,
  //   });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hovered) {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [hovered]);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div
      className="slider-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <animated.img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="image"
        style={imageSpring}
      />

      <animated.div className="text">
        Hello, I'm <br />
        <h1>Mouli Karmakar</h1>
        <h2>Frontend Developer</h2>
        <div className="slider__buttons">
          <button className="slider__buttons__button">Let's contact</button>
          <button className="slider__buttons__button">Download Resume</button>
        </div>
      </animated.div>
    </div>
  );
};

export default Slider;
