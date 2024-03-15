import React, { useState } from "react";
import { FaReact, FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import "./styles.scss";

function Navbar({ activeSection }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__brand">
          <a href="#home">
            <FaReact size={35} />
          </a>
        </div>

        <ul className={`navbar__items ${toggle ? "active" : ""}`} type="none">
          <li
            className={`navbar__items__item ${
              activeSection === "home" ? "active" : ""
            }`}
          >
            <a className="nav-link " aria-current="page" href="#home">
              Home
            </a>
          </li>
          <li
            className={`navbar__items__item ${
              activeSection === "home" ? "active" : ""
            }`}
          >
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li
            className={`navbar__items__item ${
              activeSection === "home" ? "active" : ""
            }`}
          >
            <a className="nav-link" href="#education">
              Education
            </a>
          </li>
          <li
            className={`navbar__items__item ${
              activeSection === "home" ? "active" : ""
            }`}
          >
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li
            className={`navbar__items__item ${
              activeSection === "home" ? "active" : ""
            }`}
          >
            <a className="nav-link" href="#projects">
              Projectes
            </a>
          </li>
          <li
            className={`navbar__items__item ${
              activeSection === "home" ? "active" : ""
            }`}
          >
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="navbar__toggleicons" onClick={handleToggle}>
          {toggle ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
