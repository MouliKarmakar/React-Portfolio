import React from "react";
import "./styles.scss";

function Skills({ ref }) {
  return (
    <div id="skills" ref={ref} className="skills">
      <h1>TECH SKILLS</h1>
      <div className="sections">
        <div className="section-div">
          <h3>Version Control</h3>
          <hr />
          <section>
            <a href="https://git-scm.com/doc" rel="noreferrer" target="_blank">
              <img
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                alt=""
                style={{ height: "30px", width: "30px" }}
              />
            </a>
            <span>GIT</span>
          </section>
        </div>
        <div className="section-div">
          <h3>Frameworks</h3>
          <hr />
          <section>
            <a
              href="https://mui.com/material-ui/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://mui.com/static/logo.png"
                alt=""
                style={{ height: "30px", width: "30px" }}
              />
            </a>
            <span>Material-UI</span>
          </section>
          <section>
            <a
              href="https://getbootstrap.com/docs/5.0/components/navbar/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://static-00.iconduck.com/assets.00/bootstrap-icon-2048x2048-az9h1iwm.png"
                alt=""
                style={{ height: "30px", width: "30px" }}
              />
            </a>
            <span>Bootstramp</span>
          </section>
          <section>
            <a
              href="https://v2.tailwindcss.com/docs"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://image.pngaaa.com/779/6447779-middle.png"
                alt=""
                style={{ height: "30px", width: "30px" }}
              />
            </a>
            <span>Tialwind CSS</span>
          </section>
        </div>
        <div className="section-div">
          <h3>Hosting Platform</h3>
          <hr />
          <section>
            <a
              href="https://docs.netlify.com/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png"
                alt=""
                style={{ height: "30px", width: "30px" }}
              />
            </a>
            <span>Netlify</span>
          </section>
          <section>
            <a
              href="https://docs.github.com/en"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
                style={{ height: "30px", width: "30px" }}
              />
            </a>
            <span>GitHub Pages</span>
          </section>
        </div>
        <div className="section-div">
          <h3>Scripting Languages</h3>
          <hr />
          <section>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://icones.pro/wp-content/uploads/2021/05/icone-html-rouge.png"
                alt=""
                style={{ height: "30px", width: "30px" }}
              />
            </a>
            <span>HTML5</span>
          </section>
          <section>
            {/* <a href="" rel="noreferrer" target="_blank"> */}
            <img
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt=""
              style={{ height: "30px", width: "30px" }}
            />
            {/* </a> */}
            <span>CSS</span>
          </section>
          <section>
            {/* <a href="" rel="noreferrer" target="_blank"> */}
            <img
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt=""
              style={{ height: "30px", width: "30px" }}
            />
            {/* </a> */}
            <span>JavaScript</span>
          </section>
          <section>
            {/* <a href="" rel="noreferrer" target="_blank"> */}
            <img
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt=""
              style={{ height: "30px", width: "30px" }}
            />
            {/* </a> */}
            <span>React JS</span>
          </section>
          <section>
            {/* <a href="" rel="noreferrer" target="_blank"> */}
            <img
              src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              alt=""
              style={{ height: "30px", width: "30px" }}
            />
            {/* </a> */}
            <span>SASS</span>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Skills;
