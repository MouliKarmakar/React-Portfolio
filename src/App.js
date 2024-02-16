import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import { Divider, ConfigProvider } from "antd";
const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = () => {
    const homePosition = homeRef.current?.offsetTop || 0;
    const aboutPosition = aboutRef.current?.offsetTop || 0;
    const educationPosition = educationRef.current?.offsetTop || 0;
    const skillsPosition = skillsRef.current?.offsetTop || 0;
    const projectsPosition = projectsRef.current?.offsetTop || 0;
    const contactPosition = contactRef.current?.offsetTop || 0;

    const scrollPosition = window.scrollY;

    if (scrollPosition < aboutPosition) {
      setActiveSection("home");
    } else if (scrollPosition < educationPosition) {
      setActiveSection("about");
    } else if (scrollPosition < skillsPosition) {
      setActiveSection("education");
    } else if (scrollPosition < projectsPosition) {
      setActiveSection("skills");
    } else if (scrollPosition < contactPosition) {
      setActiveSection("projects");
    } else {
      setActiveSection("contact");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      {/* ================= NAVBAR =============== */}
      <Navbar activeSection={activeSection} />

      {/* ================ PARTICLES ================= */}
      {/* =============== MAIN ================ */}
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <ConfigProvider
        theme={{
          token: {
            lineWidth: 3,
          },
        }}
      >
        <Divider style={{ color: "rgb(85, 82, 82)" }} />
      </ConfigProvider>
      <Education ref={educationRef} />
      <Skills ref={skillsRef} />
      <ConfigProvider
        theme={{
          token: {
            lineWidth: 3,
          },
        }}
      >
        <Divider style={{ color: "rgb(85, 82, 82)" }} />
      </ConfigProvider>
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default App;
