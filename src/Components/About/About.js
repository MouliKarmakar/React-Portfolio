import React from "react";
import "./styles.scss";
import { Animate } from "react-simple-animate";

function About({ ref }) {
  return (
    <div id="about" ref={ref} className="about">
      <Animate
        play
        duration={1}
        delay={0.5}
        start={{
          transform: "translateX(-1000px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <h1>ABOUT ME</h1>
      </Animate>
      <Animate
        play
        duration={1}
        delay={0.5}
        start={{
          transform: "translateX(-1000px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="content">
          <img
            src="https://mlj0276u6bix.i.optimole.com/w:1240/h:697/q:mauto/ig:avif/f:best/https://blog.mypat.in/wp-content/uploads/2021/08/V1.0-Increase-productivity-at-home-3.png"
            alt=""
            className="aboutImg"
          />

          <div className="aboutMe">
            <section>
              Hello! I'm Mouli Karmakar, a passionate learner and aspiring web
              developer from West Bengal. Currently, I'm honing my skills in web
              development through Almabetter, where I'm delving deep into the
              realms of React, HTML, and vanilla JavaScript.
            </section>
            <br />
            <section>
              My journey into the world of programming began with a curiosity to
              understand the digital landscape and create impactful solutions. I
              find immense joy in crafting interactive and user-friendly web
              experiences, constantly pushing myself to learn and adapt to new
              technologies.
            </section>
            <section>
              Let's connect and explore the possibilities together!
            </section>

            <div className="buttons">
              <a href="#contact">
                <button className="button">Let's talk</button>
              </a>
              <a
                href="https://github.com/MouliKarmakar"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">Github</button>
              </a>
              <a
                href="https://www.linkedin.com/in/mouli-karmakar-19631226b/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">Linkdin</button>
              </a>
            </div>
          </div>
        </div>
      </Animate>
    </div>
  );
}

export default About;
