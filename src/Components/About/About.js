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
        <h1>MY ABOUT</h1>
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
              Web Developer with expertise of React.js, Redux, Cloud Firestore,
              HTML and CSS. currently learning React Native for Mobile
              Application.
            </section>
            <br />
            <section>
              I am passionate programmer and a learner, born and brought up in
              Pakistan.Currently, I am enrolled in Tech Karo - Web Development
              Program "Conducted by CIRCLE".
            </section>
            <br />
            <section>
              Along with that, I also help people as a COACH on their journey of
              becoming a professional programmer. I love learning about new
              technologies, what problems are they solving and How can I use
              them to build better and scalable products.
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
