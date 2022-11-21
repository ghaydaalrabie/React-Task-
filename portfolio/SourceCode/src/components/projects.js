import React from 'react'
import {  FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";




class Projects extends React.Component {
  render() {
    return (
      <div>
        <section className="container3" id="portfolio">
          <div className="main-title">
            <h2>
              My <span className="projects">Projects</span>
            </h2>
          </div>
          <p className="port-text">
            {" "}
            <b>
              {" "}
              " Here is some of my work that I've done in various programming
              &amp; Design languages. "
            </b>
          </p>
          <div className="portfolios">
            <div className="portfolio-item">
              <div className="image">
                <img
                  src={require("./imgs/IMG-3837.JPG")}
                  alt="Architecture project"
                />
              </div>
              <div className="hover-items">
                <h3> Hotel Project </h3>
                <div className="icons">
                  <a href="https://github.com/ghaydaalrabie" className="icon">
                    <FaGithub />
                  </a>
                  <a href="#" className="icon">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img
                  src={require("./imgs/IMG-3833.JPG")}
                  alt="Architecture Project"
                />
              </div>
              <div className="hover-items">
                <h3> Business center</h3>
                <div className="icons">
                  <a href="https://github.com/ghaydaalrabie" className="icon">
                    <FaGithub />
                  </a>
                  <a href="#" className="icon">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img
                  src={require("./imgs/IMG-3841.JPG")}
                  alt="Architecture project"
                />
              </div>
              <div className="hover-items">
                <h3>Olympic pool</h3>
                <div className="icons">
                  <a href="https://github.com/ghaydaalrabie" className="icon">
                    <FaGithub />
                  </a>
                  <a href="#" className="icon">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img
                  src={require("./imgs/projext4.jpeg")}
                  alt="Project-1-Wireframe-Mokcup-"
                />
              </div>
              <div className="hover-items">
                <h3> Unique Crafts project</h3>
                <div className="icons">
                  <a
                    href="https://github.com/ghaydaalrabie/Project-1-Wireframe-Mokcup-"
                    className="icon"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=Puydf-HGLzw&t=386s"
                    className="icon"
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href="https://www.instagram.com/outo_ftheboxcrafts/"
                    className="icon"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src={require("./imgs/project5.PNG")} alt="task" />
              </div>
              <div className="hover-items">
                <h3> Grid Task </h3>
                <div className="icons">
                  <a
                    href="https://github.com/ghaydaalrabie/Html-Css-Tasks-"
                    className="icon"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.youtube.com/Orangejordan"
                    className="icon"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="image">
                <img src={require("./imgs/project6.PNG")} alt="task" />
              </div>
              <div className="hover-items">
                <h3> FleX Task </h3>
                <div className="icons">
                  <a
                    href="https://github.com/ghaydaalrabie/Html-Css-Tasks-"
                    className="icon"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="#https://www.youtube.com/watch?v=JkCLL1CzNZk&t=500s  "
                    className=" icon"
                    target="_top"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Projects;
