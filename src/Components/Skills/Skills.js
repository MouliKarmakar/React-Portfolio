import React from "react";
import "./styles.scss";
import { Divider, ConfigProvider } from "antd";

function Skills({ ref }) {
  return (
    <div id="skills" ref={ref} className="skills">
      <h1>TECH SKILLS</h1>
      <div className="sections">
        <div className="section-div">
          <h3>Version Control</h3>
          <ConfigProvider
            theme={{
              token: {
                lineWidth: 3,
              },
            }}
          >
            <Divider style={{ color: "rgb(85, 82, 82)" }} />
          </ConfigProvider>
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
          <ConfigProvider
            theme={{
              token: {
                lineWidth: 3,
              },
            }}
          >
            <Divider style={{ color: "rgb(85, 82, 82)" }} />
          </ConfigProvider>
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
          <ConfigProvider
            theme={{
              token: {
                lineWidth: 3,
              },
            }}
          >
            <Divider style={{ color: "rgb(85, 82, 82)" }} />
          </ConfigProvider>
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
          <ConfigProvider
            theme={{
              token: {
                lineWidth: 3,
              },
            }}
          >
            <Divider style={{ color: "rgb(85, 82, 82)" }} />
          </ConfigProvider>
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
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://cdn-icons-png.freepik.com/512/5968/5968242.png"
                alt=""
                style={{ height: "30px", width: "30px" }}
              />
            </a>
            <span>CSS</span>
          </section>
          <section>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
                alt=""
                style={{ height: "30px", width: "30px" }}
              />
            </a>
            <span>JavaScript</span>
          </section>
          <section>
            <a
              href="https://legacy.reactjs.org/docs/getting-started.html"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://logowik.com/content/uploads/images/react7473.logowik.com.webp"
                alt=""
                style={{ height: "30px", width: "30px" }}
              />
            </a>
            <span>React JS</span>
          </section>
          <section>
            <a
              href="https://sass-lang.com/documentation/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"
                alt=""
                style={{ height: "30px", width: "30px" }}
              />
            </a>
            <span>SASS</span>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Skills;
